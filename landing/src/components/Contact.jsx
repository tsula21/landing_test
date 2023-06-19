import React from "react";
import PrimaryHeader from "./PrimaryHeader";
import PrimaryParagraph from "./PrimaryParagraph";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <PrimaryHeader
        className="main_title text-[24px] md:text-[39px] xl:text-[54px] 2xl:text-[68px] font-bold uppercase text-[#fff] text-center"
        children="Контакты"
      />
      <PrimaryParagraph
        className="w-[80%] text-center mt-4 text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px]"
        children="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн."
      />
    </div>
  );
};

export default Contact;
