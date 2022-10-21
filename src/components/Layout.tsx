import React, { memo, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import networkImage from "../../public/images/banner/infoBanner.jpg";
import FirstDepthBanner from "./FirstDepthBanner";

interface Props {
    children: ReactNode;
}

function Layout({ children }: Props) {
    const siteMap = {
        info: {
            title_KO: "센터 소개",
            title_EN: "Center Info",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [
                {
                    title_KO: "센터장 소개",
                    title_EN: "CenterLeader",
                    subMenu: [],
                    href: "/info",
                },
                {
                    title_KO: "센터 비전",
                    title_EN: "Center Vision",
                    subMenu: [],
                    href: "/info/vision",
                },
                {
                    title_KO: "주요 수행 업무",
                    title_EN: "Main Business",
                    subMenu: [],
                    href: "/info/task",
                },
                {
                    title_KO: "센터 연혁",
                    title_EN: "Center History",
                    subMenu: [],
                    href: "/info/history",
                },
                {
                    title_KO: "센터 조직(조직도)",
                    title_EN: "Center Organization",
                    subMenu: [
                        {
                            title_KO: "조직도",
                            title_EN: "Organization Chart",
                            href: "/info/organization",
                        },
                        {
                            title_KO: "연구협력 네트워크",
                            title_EN: "Research Collaboration Network",
                            href: "/info/organization/network",
                        },
                        {
                            title_KO: "연구 자문단",
                            title_EN: "Research Advisory Group",
                            href: "/info/organization/research",
                        },
                        {
                            title_KO: "연구 윤리 자문단",
                            title_EN: "Research Ethics Advisory Group",
                            href: "/info/organization/ethics",
                        },
                        {
                            title_KO: "센터 연구원",
                            title_EN: "Center Research Engineer",
                            href: "/info/organization/analytics",
                        },
                    ],
                    href: "/info/organization",
                },
                {
                    title_KO: "센터 구성원",
                    title_EN: "Center Member",
                    subMenu: [],
                    href: "/info/member",
                },
            ],
        },

        research: {
            title_KO: "연구 및 사업",
            title_EN: "Research And Business",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [
                {
                    title_KO: "연구 및 사업",
                    title_EN: "Research And Business",
                    subMenu: [],
                    href: "/research",
                },
                {
                    title_KO: "MOU 기관",
                    title_EN: "MOU",
                    subMenu: [],
                    href: "/research/mou",
                },
            ],
        },

        major: {
            title_KO: "전공 소개",
            title_EN: "EduData Science",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [
                {
                    title_KO: "에듀 데이터 사이언스",
                    title_EN: "EduData Science",
                    subMenu: [],
                    href: "/major",
                },
                {
                    title_KO: "교육 측정",
                    title_EN: "Education Measurement",
                    subMenu: [],
                    href: "/major/measurement",
                },
                {
                    title_KO: "교육 평가",
                    title_EN: "Education Evaluation",
                    subMenu: [],
                    href: "/major/evaluation",
                },
                {
                    title_KO: "졸업 후 진로",
                    title_EN: "After Graduation",
                    subMenu: [],
                    href: "/major/vision",
                },
                {
                    title_KO: "동문",
                    title_EN: "Alumni",
                    subMenu: [],
                    href: "/major/alumni",
                },
            ],
        },
        data: {
            title_KO: "자료실",
            title_EN: "Reference",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [
                {
                    title_KO: "논문 및 연구 보고서",
                    title_EN: "Papers and Research Reports",
                    subMenu: [],
                    href: "/data",
                },
                {
                    title_KO: "오픈 데이터",
                    title_EN: "Open Data",
                    subMenu: [],
                    href: "/data/open",
                },
                {
                    title_KO: "학습 자료",
                    title_EN: "Study Material",
                    subMenu: [],
                    href: "/data/study",
                },
                {
                    title_KO: "갤러리",
                    title_EN: "Gallery",
                    subMenu: [],
                    href: "/data/gallery",
                },
            ],
        },
        notice: {
            title_KO: "공지사항",
            title_EN: "Notice",
            description: "메뉴에 대한 설명을 써주세요",
            subMenu: [
                {
                    title_KO: "센터 소식",
                    title_EN: "Center News",
                    subMenu: [],
                    href: "/notice",
                },
                {
                    title_KO: "행사 소식",
                    title_EN: "Event News",
                    subMenu: [],
                    href: "/notice/event",
                },
                {
                    title_KO: "Q&A",
                    title_EN: "Q&A",
                    subMenu: [],
                    href: "/notice/qna",
                },
                {
                    title_KO: "연구원 모집",
                    title_EN: "Researcher Recruitment",
                    subMenu: [],
                    href: "/notice/recruit",
                },
            ],
        },
    };

    const router = useRouter();
    const SIDEBAR_HIDDEN = ["/", "/adminLogin"];

    return SIDEBAR_HIDDEN.includes(router.pathname) ? (
        <div>
            <Header siteMap={siteMap} />
            {children}
            <Footer />
        </div>
    ) : (
        <div className='h-full w-full'>
            <Header siteMap={siteMap} />
            <FirstDepthBanner image={networkImage} siteMap={siteMap} />
            <main className='m-auto flex min-h-[600px] max-w-[1536px] flex-col 2xl:flex-row 2xl:items-start'>
                <Sidebar siteMap={siteMap} />
                <div className='w-full p-10 md:px-20 md:py-10'>{children}</div>
            </main>
            <Footer />
        </div>
    );
}

export default memo(Layout);
