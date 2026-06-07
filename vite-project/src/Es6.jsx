
export default function Es6() {
    const myobj = {
        name: "Fiat",
        model: "500",
        color: "white"
    };


    return (
        <div>
            <h1>My car is a {myobj.color} {myobj.name} {myobj.model}</h1>
        </div>
    )
} 