import React, { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";
import Image from "next/image";
import RecruitImg from "../../public/images/recruit.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Recruit() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (window.innerWidth > 1020) {
      setWidth(1000);
    } else if (window.innerWidth > 820) {
      setWidth(800);
    } else {
      setWidth(450);
    }

    const handleScreen = () => {
      if (window.innerWidth > 1020) {
        setWidth(1000);
      } else if (window.innerWidth > 820) {
        setWidth(800);
      } else {
        setWidth(450);
      }
    };
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <div>
      <HeadMeta
        title={"EBA | 연구원 모집"}
        description={"EBA센터 연구원 모집 공고입니다"}
      />
      <div className='flex w-full justify-center '>
        <Image src={RecruitImg} alt='recruit' className='object-contain' />
      </div>
    </div>
  );
}

export default Recruit;
