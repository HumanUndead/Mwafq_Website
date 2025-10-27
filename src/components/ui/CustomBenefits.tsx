/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import Button from "./Button";

interface BenefitItem {
  text: string;
}

interface CustomBenefitsSectionProps {
  benefits: BenefitItem[];
  buttonText?: string;
  onButtonClick?: () => void;
  image: any | string;
}

const CustomBenefits: React.FC<CustomBenefitsSectionProps> = ({
  benefits,
  buttonText,
  onButtonClick,
  image,
}) => {
  return (
    <section className="container_main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section - Shows first on mobile, second on desktop */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-3xl text-white">
            <div className="aspect-square flex items-center justify-center relative overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt="benefits image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Text Section - Shows second on mobile, first on desktop */}
        <div className="space-y-8 order-2 lg:order-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}

          {buttonText && (
            <div className="pt-4">
              <Button variant="primary" onClick={onButtonClick}>
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomBenefits;
