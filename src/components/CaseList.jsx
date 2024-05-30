import pb from "../lib/pb";
import { useState, useEffect } from "react";
import DropdownSearch from "./DropdownSearch";

export default function CaseList() {
    const user = pb.authStore.model;

    const [cases, setCases] = useState(null);
    const [error, setError] = useState(null);

    const [selectedCase, setSelectedCase] = useState(null);

    // async function getCases() {
    //     const res = await fetch("/api/cases", {
    //         method: "GET",
    //         headers: {
    //             accept: "application/json",
    //             authorization: pb.authStore.token,
    //         },
    //     });

    //     const data = await res.json();

    //     return data;
    // }

    // useEffect(() => {
    //     const d = getCases();
    //     setCases(d);
    // }, []);

    return (
        <div>
            <DropdownSearch placeholder="Select Case" />
            <h1>cases go here</h1>
        </div>
    );
}
