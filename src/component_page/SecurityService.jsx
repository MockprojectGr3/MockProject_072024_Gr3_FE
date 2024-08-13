import img from './../assets/image/service.png'

const SecurityService = () => {
    const mockData = [
        {
            id: 1,
            title: "STATIC SECURITY",
            description:
                "Static security guards maintain a visible presence at a fixed location, deterring threats and ensuring safety. They monitor entrances and conduct patrols to safeguard the assigned area..",
            image: '',
        },
        {
            id: 2,
            title: "SECURITY DOG HANDLER",
            description:
                "A dynamic duo of trained canines and skilled handlers. Experience the next level of security with our vigilant Security Dog Handlers, where instinct and training unite for your unparalleled protection..",
            image: '',
        },
        {
            id: 3,
            title: "NHS & HEALTH",
            description:
                "At Guardgrid Security, we understand the delicate nature of healthcare security. Our services go beyond safeguarding physical spaces; they extend to fostering an environment of trust and well-being..",
            image: '',
        },
    ];

    return (
        <div>
            <center>
                <div className="text-gray-400">
                    <p>
                        <b>WHAT YOU DO</b>
                    </p>
                    <hr className="text-gray-400 w-36" />
                </div>
                <div>
                    <h2>
                        <b>TOPLEVEL SECURITY SERVICES</b>
                    </h2>
                </div>
                <div className="flex flex-nowrap overflow-x-auto mt-5 justify-center">
                    {mockData.map((data) => (
                        <div
                            className="inline-block m-6"
                            key={data.id}
                            style={{ height: 512 }}
                        >
                            <img
                                src={img}
                                alt={data.title}
                                style={{ height: 240, width: 366 }}
                            />
                            <div className="bg-black text-white p-4" style={{ width: 366 }}>
                                <h3 className="p-2">
                                    <b>{data.title}</b>
                                </h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
        </div>
    );
};

export default SecurityService;
