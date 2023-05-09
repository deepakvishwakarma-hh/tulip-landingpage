import LgMenu from "./LgMenu"
import dynamic from "next/dynamic";
import { motion } from 'framer-motion'
import { cursor } from "@/store/slices";
import SmoothScroll from "./SmoothScroller";
import { useAppDispatch } from "@/store/hooks";
import Link from "next/link";
const DynamicToggler = dynamic(() => import('./ThemeToggle'),
    { ssr: false })

const Layout = ({ children }: any) => {
    const dispatch = useAppDispatch()
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }

    return (
        <div className="w-full h-full fixed top-0 left-0 ">
            <HorizontalLine />
            <DesktopControls {...{
                handleDefault,
                handleFocused
            }} />
            <SmoothScroll>
                <div>{children}</div>
            </SmoothScroll>
        </div>
    )
}
export default Layout


// Components

const DesktopControls = ({ handleDefault, handleFocused }: any) => (
    <div className="w-full h-full fixed top-0 left-0 
    p-[24px]
   4xl:p-[50px]
   3xl:p-[50px]
   2xl:p-[50px]
   xl:p-[25px]
    grid grid-cols-2">
        <div>
            <Link href={'/'}>
                <motion.h5
                    onHoverEnd={handleDefault}
                    className=" cursor-pointer text-md"
                    onHoverStart={handleFocused}
                    whileHover={{ letterSpacing: '1px', color: '#4b6cc1' }}
                >Richard William's <br /> Portfolio</motion.h5></Link>
        </div>

        <div>
            <DynamicToggler />
        </div>

        <div className="flex items-end  w-full h-full">
            <LgMenu />
        </div>
        <div className="flex items-end justify-end  w-full h-full">
            <Link href={'/'}>
                <motion.h5
                    onHoverEnd={handleDefault}
                    className=" cursor-pointer text-md hidden lg:block"
                    onHoverStart={handleFocused}
                    whileHover={{ letterSpacing: '3px', color: '#4b6cc1', fontWeight: "bold" }}
                >Available for work!</motion.h5></Link>
        </div>
    </div>
)

const HorizontalLine = () => (
    <div className="grid grid-cols-[1fr_1fr_1fr] w-full h-screen top-0 bg-red-500--
    

    4xl:px-[300px]
    3xl:px-[250px]
    2xl:px-[200px]
    xl:px-[176px]
    lg:px-[48px]
    md:px-[48px]
    sm:px-[48px]
    fixed ">
        <div className="border-l border-[#ececec] dark:border-[#ececec1b]">&nbsp;</div>
        <div className="border-l border-[#ececec] dark:border-[#ececec1b]">&nbsp;</div>
        <div className="border border-y-0 border-[#ececec] dark:border-[#ececec1b]">&nbsp;</div>
    </div>
)