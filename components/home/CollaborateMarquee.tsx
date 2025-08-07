import { images } from "@/services";
import Marquee from "../ui/marquee";
import Image, { StaticImageData } from "next/image";

interface Collaborator {
    _id: number;
    image: StaticImageData;
    alt: string;
}

const CollaborateMarquee = () => {

    const collaborators: Collaborator[] = [
        { _id: 1, image: images.collaborator1, alt: "collaborator 1" },
        { _id: 2, image: images.collaborator2, alt: "collaborator 2" },
        { _id: 3, image: images.collaborator3, alt: "collaborator 3" },
        { _id: 4, image: images.collaborator4, alt: "collaborator 4" },
        { _id: 5, image: images.collaborator5, alt: "collaborator 5" },
        { _id: 6, image: images.collaborator6, alt: "collaborator 6" }
    ];

    return (
        <div
            className="w-full bg-white pb-6 pt-6 lg:pt-15 lg:pb-15 font-inter"
            id={"companies"}
        >
            <p className="text-center text-black-600 md:text-black-700 text-lg md:text-2xl !leading-[1.4]">
                Our globally recognized trusted partners
            </p>

            <Marquee pauseOnHover className="[--duration:20s] mt-6 md:mt-7 lg:mt-8">
                {collaborators.map(({ _id, image, alt }) => (
                    <Image
                        src={image}
                        alt={alt}
                        height={40}
                        width={130}
                        className="h-auto w-[100px] lg:w-[130px] object-contain grayscale mx-6 md:mx-8 lg:mx-[60px]"
                        key={_id}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default CollaborateMarquee;