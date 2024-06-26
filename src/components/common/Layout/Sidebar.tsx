import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import { SubMap } from "../../../../typing";
import SidebarMenu from "./SidebarMenu";
import {
    ArrowDownCircleIcon,
    ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import { data, info, major, notice, research, location } from "../../../utils/Utils";
import symbol_outline_quarter from "../../../../public/images/logo/symbol_outline_quarter.png";
import Image from "next/legacy/image";
import {useRecoilValue} from "recoil";
import {languageState} from "../../../atoms/languageAtom";


interface Props {}

function Sidebar() {
    const [currentMenu, setCurrentMenu] = useState<SubMap>();
    const path = useRouter().pathname.split("/");
    const [a, firstDepth, secondDepth, thirdDepth] = path;
    const [menuOpen, setMenuOpen] = useState(false);
    const [isWide, setIsWide] = useState(false);
    const language = useRecoilValue(languageState)

    useEffect(() => {
        const handleScreen = () => {
            if (window.innerWidth > 1536) {
                setIsWide(true);
                setMenuOpen(true);
            } else {
                setIsWide(false);
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleScreen);
        if (window.innerWidth > 1536) {
            setIsWide(true);
        } else {
            setIsWide(false);
        }

        return () => {
            window.removeEventListener("resize", handleScreen);
        };
    }, []);

    useLayoutEffect(() => {
        if (firstDepth === "info") {
            setCurrentMenu(info);
        } else if (firstDepth === "research") {
            setCurrentMenu(research);
        } else if (firstDepth === "major") {
            setCurrentMenu(major);
        } else if (firstDepth === "data") {
            setCurrentMenu(data);
        } else if (firstDepth === "notice") {
            setCurrentMenu(notice);
        } else if (firstDepth === "location"){
            setCurrentMenu(location)
        }
        }, [firstDepth]);


    return (
        <div className='relative mt-3 flex flex-col justify-center px-4 2xl:mt-0 2xl:w-[300px]'>
            {/*현재 메뉴*/}
            {language ? (
                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='relative flex w-full items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 py-3 text-2xl text-white 2xl:h-36 '
                >
                    {currentMenu?.title_EN}
                    <div className='absolute bottom-0 right-0 h-20 w-20'>
                        <Image src={symbol_outline_quarter} />
                    </div>
                </div>
            ):(
                <div
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='relative flex w-full items-center justify-center bg-gradient-to-tl from-PRIMARY_COLOR-500 to-PRIMARY_COLOR-400 py-3 text-2xl text-white 2xl:h-36 '
                >
                    {currentMenu?.title_KO}
                    <div className='absolute bottom-0 right-0 h-20 w-20'>
                        <Image src={symbol_outline_quarter} />
                    </div>
                </div>
            )}


            {isWide ? null : menuOpen ? (
                <ArrowUpCircleIcon className='absolute right-8 top-3.5 inline-block h-6 text-white' />
            ) : (
                <ArrowDownCircleIcon className='absolute right-8 top-3.5 inline-block h-6 text-white' />
            )}

            {/*현재 메뉴 리스트*/}
            {(menuOpen || isWide) && (
                <ul className='flex flex-col border-l border-b border-r'>
                    {currentMenu?.subMenu.map((subMenu, index) => (
                        <SidebarMenu key={index} subMenu={subMenu} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default memo(Sidebar);
