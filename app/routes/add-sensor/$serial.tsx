import {useParams} from "@remix-run/react";
import {useEffect, useState} from "react";

const AddSensor = () => {
    const { serial } = useParams();
    const [location, setLocation] = useState([0,0]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((loc) => {
                setLocation([loc.coords.latitude, loc.coords.longitude])
            });
        }
    }, []);

    return (
        <>
        <div>Sensor SN = {serial}</div>
        <div>Location = {location.join(', ')}</div>
        </>
    )
}

export default AddSensor;
