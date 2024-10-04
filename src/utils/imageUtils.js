const convertImageToRGB565 = (imageData, useGreenAsAlpha = true) => {
    const { width, height, data } = imageData; // ImageData contains pixel data in RGBA format
    const rgb565Array = new Uint16Array(width * height); // Create a Uint16Array for RGB565

    for (let i = 0; i < width * height; i++) {
        const pixelIndex = i * 4; // Each pixel has 4 values (R, G, B, A)
        let red = data[pixelIndex]; // Red channel (0-255)
        let green = data[pixelIndex + 1]; // Green channel (0-255)
        let blue = data[pixelIndex + 2]; // Blue channel (0-255)
        const alpha = data[pixelIndex + 3]; // Alpha channel (0-255)

        // If the pixel is transparent (alpha < 255), set it to pure green (R=0, G=255, B=0)
        if (useGreenAsAlpha & (alpha === 0)) {
            red = 0;
            green = 255;
            blue = 0;
        }

        // Convert 8-bit RGB to 5-6-5 format:
        const r = Math.floor((red * 31) / 255); // Red: 5 bits (0-31)
        const g = Math.floor((green * 63) / 255); // Green: 6 bits (0-63)
        const b = Math.floor((blue * 31) / 255); // Blue: 5 bits (0-31)

        // Pack the values into a 16-bit RGB565 value (RRRRRGGGGGGBBBBB)
        const rgb565 = (r << 11) | (g << 5) | b;

        // Store the packed 16-bit value in the array
        rgb565Array[i] = rgb565;
    }

    // Return the Uint16Array containing the RGB565 data
    return rgb565Array;
};

const convertRgb565ToImage = (
    arrayBuffer,
    width,
    height,
    useGreenAsAlpha = true
) => {
    const uint16Array = new Uint16Array(arrayBuffer);
    const imageDataArray = new Uint8ClampedArray(width * height * 4); // RGBA (4 channels per pixel)

    uint16Array.forEach((rgb565, i) => {
        // Extract red, green, blue from the 16-bit RGB565 value
        const r = (rgb565 >> 11) & 0x1f; // 5 bits for red
        const g = (rgb565 >> 5) & 0x3f; // 6 bits for green
        const b = rgb565 & 0x1f; // 5 bits for blue

        // Expand to 8 bits per channel (0-255)
        const red = (r * 255) / 31;
        const green = (g * 255) / 63;
        const blue = (b * 255) / 31;

        // Set pixel values in ImageData (RGBA)
        const pixelIndex = i * 4;
        imageDataArray[pixelIndex] = red; // Red
        imageDataArray[pixelIndex + 1] = green; // Green
        imageDataArray[pixelIndex + 2] = blue; // Blue
        imageDataArray[pixelIndex + 3] =
            useGreenAsAlpha & (red === 0) & (green === 255) & (blue === 0)
                ? 0
                : 255; // Alpha (fully opaque)
    });

    return new ImageData(imageDataArray, width, height);
};

const convertImageDataToDataURL = imageData => {
    const canvas = document.createElement('canvas');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const ctx = canvas.getContext('2d');
    // Draw the image data onto the canvas
    ctx.putImageData(imageData, 0, 0);
    // Return the image as a data URL or use the canvas directly
    return canvas.toDataURL(); // or document.body.appendChild(canvas) to see it directly on the page
};

const arrayBufferToImageData = (
    arrayBuffer,
    width,
    height,
    useGreenAsAlpha = true
) => {
    // Convert ArrayBuffer to ImageData
    const imageData = convertRgb565ToImage(
        arrayBuffer,
        width,
        height,
        useGreenAsAlpha
    );
    const url = convertImageDataToDataURL(imageData);
    return { imageData, url, rgb565:arrayBuffer };
};

const getImageDetails = async file => {
    const name = file.name;
    const imageData = await getImageData(file);
    const rgb565 = convertImageToRGB565(imageData)
    return { name, imageData, rgb565 };
};

const getImageData = file => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        // Once the image is loaded
        img.onload = () => {
            // Create a canvas element and set its dimensions to the image's dimensions
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image onto the canvas
            context.drawImage(img, 0, 0);

            // Get the image data (RGBA) from the canvas
            const imageData = context.getImageData(0, 0, img.width, img.height);

            // Resolve with the Uint8ClampedArray (pixel data)
            resolve(imageData);
        };

        // Handle image loading errors
        img.onerror = () => {
            reject(new Error('Failed to load image.'));
        };

        // Convert the file to a data URL and set it as the source of the image
        reader.onload = () => {
            img.src = reader.result; // Set image source to the data URL
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    });
};

export { arrayBufferToImageData, getImageDetails, convertImageToRGB565 };
