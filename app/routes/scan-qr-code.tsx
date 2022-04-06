import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const ScanQRPage = (props) => {
    const ref = React.createRef();

    const openImageDialog = () => {
        if (ref) {
            ref.openImageDialog();
        }
    }

    const isIOS = () =>
        [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)

    return (
        <>
            <input type="button" value="Make a picture" onClick={openImageDialog} />
            <QrReader
                ref={ref}
                constraints={{}}
                delay={300}
                onResult={(result, error) => {
                    if (!!result) {
                        const url = result?.getText();
                        if (url) {
                            window.location.href = url;
                        }
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
                legacyMode={true}
            />
        </>
    );
};

export default ScanQRPage;
