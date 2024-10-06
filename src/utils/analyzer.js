import { arrayBufferToImageData } from './imageUtils';
// import JSZip from 'jszip';
import metadata from './metadata.json';
import firmwareChecker from './firmwareChecker';

const getCharInfos = (arrayBuffer, spriteMetadata) => {
    const data = new DataView(arrayBuffer.slice(0));
    let offset = Number(spriteMetadata.StatTableLocation);
    const statLength = spriteMetadata.Stats.length;
    let charInfos = [];
    for (let i = 0; i < spriteMetadata.NumCharas; i++) {
        const stats = spriteMetadata.Stats.map((stat, index) => {
            const obj = {};
            obj[stat] = data.getUint16(
                offset + i * statLength * 2 + index * 2,
                true
            );
            return obj;
        });
        const statObj = Object.assign({}, ...stats);
        charInfos.push(statObj);
    }
    return charInfos;
};

const getImageInfos = (arrayBuffer, spriteMetadata) => {
    const data = new DataView(arrayBuffer.slice(0));
    // Read size table
    let offset = spriteMetadata.SizeTableOffset;
    let imageInfos = [];
    for (let i = 0; i < spriteMetadata.NumImages; i++) {
        imageInfos.push({
            width: data.getUint16(offset, true),
            height: data.getUint16(offset + 2, true),
        });
        offset += 4;
    }

    // Read offsets
    offset = Number(spriteMetadata.SpritePackBase);
    imageInfos.forEach(info => {
        info.dataOffset = data.getInt32(offset, true);
        offset += 4;
    });
    return imageInfos;
};

const getImage = (arrayBuffer, spriteMetadata, info) => {
    const pixels = arrayBuffer.slice(
        Number(spriteMetadata.SpritePackBase) + info.dataOffset,
        Number(spriteMetadata.SpritePackBase) +
            info.dataOffset +
            info.width * info.height * 2
    );
    return arrayBufferToImageData(pixels, info.width, info.height);
};

const getImages = (arrayBuffer, spriteMetadata, imageInfos) => {
    const imageDatas = imageInfos.map(info => {
        return getImage(arrayBuffer, spriteMetadata, info);
    });
    return imageDatas;
};

// const downloadAllImages = async spriteUrls => {
//     const zip = new JSZip();
//     const folder = zip.folder('images'); // Create a folder inside the zip

//     // Convert dataURLs to binary and add them to the zip
//     spriteUrls.forEach((dataUrl, index) => {
//         const base64Data = dataUrl.split(',')[1]; // Strip the base64 header
//         const imgFileName = `${index}.png`; // Name for the image file
//         folder.file(imgFileName, base64Data, { base64: true });
//     });

//     // Generate the zip file
//     const content = await zip.generateAsync({ type: 'blob' });
//     // Create a link element and trigger download
//     downloadFile(URL.createObjectURL(content), 'images.zip')
// };

async function rebuild(data) {
    const buffer = data.buffer.slice(0);
    const dataView = new DataView(buffer)
    const spriteMetadata = data.spriteMetadata;
    const view = new Uint8Array(buffer);
    const imageInfos = data.imageInfos;
    const charInfos = data.charInfos;

    imageInfos.forEach((img, i) => {
        const { dataOffset } = img;
        const newImageView = new Uint8Array(data.imageDatas[i].rgb565);
        view.set(
            newImageView,
            Number(spriteMetadata.SpritePackBase) + dataOffset
        );
    });

    const statOffset = Number(spriteMetadata.StatTableLocation);
    const statLength = spriteMetadata.Stats.length;
    charInfos.forEach((info, charIndex) => {
        Object.keys(info).forEach((key, statIndex) => {
            dataView.setUint16(statOffset+charIndex*statLength*2+statIndex*2,info[key],true)
        })
    })
    
    return buffer;
}

const downloadFile = (url, filename) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.click();
};

// Function to convert ArrayBuffer to a binary file and trigger download
const downloadBIN = (arrayBuffer, filename = 'output.bin') => {
    // Step 1: Create a Blob from the ArrayBuffer
    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
    // Step 2: Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    downloadFile(url, filename);
};

const init = async arrayBuffer => {
    const buffer = arrayBuffer;
    const firmware = await firmwareChecker(buffer);
    if (!firmware) {
        return null;
    }
    const spriteMetadata = firmware ? metadata[firmware.id] : null;
    const imageInfos = getImageInfos(buffer, spriteMetadata);
    const imageDatas = getImages(arrayBuffer, spriteMetadata, imageInfos);
    const charInfos = getCharInfos(buffer, spriteMetadata);
    return {
        buffer,
        firmware,
        spriteMetadata,
        imageInfos,
        imageDatas,
        charInfos,
    };
};

export { init, downloadBIN, rebuild };
