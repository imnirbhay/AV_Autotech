/**
 * Landing Page Component (Frame36.tsx)
 * 
 * Auto-generated from Figma design with semantic naming improvements.
 * This file contains all sections of the landing page.
 * 
 * STRUCTURE:
 * - Imports: SVG paths, images, animations
 * - Small UI Components: Frame[N], Group[N], Vuesax* (Icons)
 * - Section Components: Frame8, Frame32, Group10, Frame60, Frame39, Frame43, Frame78, Frame67
 * - Main Export: LandingPage() - Composes all sections with semantic names
 * 
 * SEMANTIC SECTION MAPPING:
 * LandingPage = Main container
 *   ├─ HeroContainer (Frame32) = Hero banner section
 *   ├─ ServicesSection (Group10) = Services overview
 *   ├─ TestimonialsSection (Frame60) = Customer testimonials
 *   ├─ ProjectsSection (Frame39) = Project showcase
 *   ├─ FeaturesSection (Frame43) = Key features
 *   ├─ ContactSection (Frame78) = Contact form
 *   └─ FooterSection (Frame67) = Footer
 * 
 * NOTE: Original Frame names are preserved for structure.
 * Semantic wrappers provide readable names for developers.
 * 
 * @generated Figma code generation
 * @modified 2025 - Added semantic naming & comments
 */

import svgPaths from "./svg-p1rsuycs6f";
import imgYoungPrettyWomanLookingHappyGoofyWithBroadFunLoonySmileEyesWideOpenAgainstWhiteWall2 from "@/assets/6173c131b0406d3c7145e9480ddb14838a494ec7.png";
import imgFrame376 from "@/assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgFrame344 from "@/assets/ba56d13b70a40e5606603b63d86c379e61a059e9.png";
import imgFrame347 from "@/assets/6fddbd2b03eab49a4f76b3a0e34d3e8a40d52a9f.png";
import imgFrame349 from "@/assets/ccdd92b1bfee9ab07bef167270461de5ba241a23.png";
import imgUnsplashHXbdghd1JJa from "@/assets/2307e9fc8d99bba15eb3c4f90c31a624850eda34.png";
import imgIndiaMartSymbolPng1 from "@/assets/cd49b1e25e58eededaf41103636e4344d7190b9b.png";
import imgFrame26 from "@/assets/5cf28d4ff7cabdc9b27cdea620bb18818f2d6f54.png";
import imgFrame28 from "@/assets/2e2146d6ef43febb94a0229038f623c9a714e196.png";
import imgFrame341 from "@/assets/b7832939d60c2e2f523d75cb89617d3e5b0c1dd8.png";
import imgFrame326 from "@/assets/3f0c7249e0ba3d9e3c1556a26c76670f11a0068c.png";
// Imports removed - component uses only inline rendering

function Frame4() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.1)] h-[45px] ml-0 mt-[19px] relative rounded-[39px]">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[26px] py-[13px] relative rounded-[inherit]">
        <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#171717] text-[24px] text-nowrap tracking-[-0.48px]">Hello !</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#171717] border-solid inset-0 pointer-events-none rounded-[39px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame4 />
      <div className="[grid-area:1_/_1] h-[28px] ml-[102.03px] mt-0 relative w-[27px]">
        <div className="absolute inset-[-7.14%_-7.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.0006 32.0005">
            <path d={svgPaths.p2661a6a0} id="Vector 1" stroke="var(--stroke-0, #3B82E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] relative shrink-0">
      <Group />
      <div className="font-['Urbanist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#171717] text-[0px] text-center tracking-[-1.9px] w-[913px]">
        <p className="leading-none mb-0 text-[95px]">
          <span className="font-['Urbanist:Medium',sans-serif] font-medium tracking-[-1.9px]">Contact Us for</span>{" "}
        </p>
        <p className="leading-none text-[95px]">
          <span className="text-[#3b82e6] tracking-[-1.9px]"> </span>
          <span className="font-['Urbanist:Bold',sans-serif] font-bold text-[#3b82e6] tracking-[-1.9px]">Engineering</span> <span className="font-['Urbanist:Medium',sans-serif] font-medium tracking-[-1.9px]">Work</span>
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[264px] top-[21px]">
      <Frame1 />
      <div className="absolute flex h-[88.075px] items-center justify-center left-[31.82px] top-[235.93px] w-[85.827px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[193deg]">
          <div className="h-[74px] relative w-[71px]">
            <div className="absolute inset-[-3.38%_-3.52%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.0008 79.0007">
                <path d={svgPaths.pad46880} id="Vector 2" stroke="var(--stroke-0, #3B82E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxBoldQuoteUp() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/quote-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="quote-up">
          <g id="Vector" opacity="0"></g>
          <path d={svgPaths.p35158000} fill="var(--fill-0, #344054)" id="Vector_2" />
          <path d={svgPaths.p2b170700} fill="var(--fill-0, #344054)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldQuoteUp1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="vuesax/bold/quote-up">
      <VuesaxBoldQuoteUp />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[92px] top-[320px]">
      <VuesaxBoldQuoteUp1 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#171717] text-[28px] tracking-[-0.56px] w-[444px]">{`AV Autotech provides you the best range of commercial construction service & new items with effective & timely delivery.`}</p>
    </div>
  );
}

function Star() {
  return (
    <div className="absolute inset-[10.42%_8.32%_10.41%_8.33%]" data-name="Star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0052 38.0025">
        <g id="Star">
          <path d={svgPaths.p2b4c0200} fill="var(--fill-0, #FDBD1B)" id="Star_2" />
        </g>
      </svg>
    </div>
  );
}

function IconStar() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="icon/Star">
      <Star />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      {[...Array(5).keys()].map((_, i) => (
        <IconStar key={i} />
      ))}
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-none relative shrink-0 text-[#171717] text-center text-nowrap">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[53px] tracking-[-1.06px]">Experince</p>
      <p className="font-['Urbanist:Bold',sans-serif] font-bold relative shrink-0 text-[72px] tracking-[-1.44px]">10 Years</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[1084px] top-[360px]">
      <Frame6 />
      <Frame />
    </div>
  );
}

function IconOutlinedDirectionsStraightArrowsUpRight() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="icon / outlined / directions / straight arrows / up right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="icon / outlined / directions / straight arrows / up right">
          <path d="M12.25 29.75L29.75 12.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.25 12.25H29.75V29.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#3b82e6] relative rounded-[60px] shrink-0 w-[208px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[25px] text-nowrap text-white tracking-[-0.5px]">Portfolio</p>
        <IconOutlinedDirectionsStraightArrowsUpRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[60px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <p className="font-['Urbanist:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[25px] text-nowrap text-white tracking-[-0.5px]">Hire me</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] bottom-[43px] content-stretch flex gap-[10px] h-[82px] items-center justify-center left-[292px] overflow-clip p-[10px] right-[294px] rounded-[50px]">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Group7() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 10" opacity="0">
          <g id="Vector">
            <path d={svgPaths.p113bfd00} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p162b4b00} fill="black" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p98cdc80} fill="black" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p3667af20} fill="black" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p27716f80} fill="black" />
          </g>
          <g id="Vector_6">
            <path d={svgPaths.p353c1800} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[24.38%_40.18%_61.25%_42.34%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 9" opacity="0">
          <g id="Vector">
            <path d={svgPaths.p599c770} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p27896400} fill="black" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p30dd5500} fill="black" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p2a97be00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 7" opacity="0">
          <g id="Vector">
            <path d={svgPaths.p2e0bad00} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2dc67fc0} fill="black" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.pc3be4c0} fill="black" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.pa95fe00} fill="black" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p59bd200} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconOutlinedDirectionsStraightArrowsUpRight1() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="icon / outlined / directions / straight arrows / up right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="icon / outlined / directions / straight arrows / up right">
          <path d="M12.25 29.75L29.75 12.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.25 12.25H29.75V29.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#3b82e6] relative rounded-[60px] shrink-0 w-[208px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[25px] text-nowrap text-white tracking-[-0.5px]">Portfolio</p>
        <IconOutlinedDirectionsStraightArrowsUpRight1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[60px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative w-full">
          <p className="font-['Urbanist:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[25px] text-nowrap text-white tracking-[-0.5px]">Hire me</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] bottom-[72px] content-stretch flex gap-[10px] h-[82px] items-center justify-center left-[327px] overflow-clip p-[10px] right-[324px] rounded-[50px]">
      <Frame29 />
      <Frame34 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 5" opacity="0">
          <g id="Vector">
            <path d={svgPaths.pe0f87e0} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p280c7500} fill="black" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p29597400} fill="black" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p2a32b400} fill="black" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p3f498280} fill="black" />
          </g>
          <g id="Vector_6">
            <path d={svgPaths.p288d3400} fill="black" />
          </g>
          <g id="Vector_7">
            <path d={svgPaths.p33d7c800} fill="black" />
          </g>
          <g id="Vector_8">
            <path d={svgPaths.p118fdc00} fill="black" />
          </g>
          <g id="Vector_9">
            <path d={svgPaths.p1dbf3d40} fill="black" />
          </g>
          <g id="Vector_10">
            <path d={svgPaths.p30061100} fill="black" />
          </g>
          <g id="Vector_11">
            <path d={svgPaths.p1acee100} fill="black" />
          </g>
          <g id="Vector_12">
            <path d={svgPaths.p174ac400} fill="black" />
          </g>
          <g id="Vector_13">
            <path d={svgPaths.p33c5c180} fill="black" />
          </g>
          <g id="Vector_14">
            <path d={svgPaths.p18e73500} fill="black" />
          </g>
          <g id="Vector_15">
            <path d={svgPaths.p3f53bdf0} fill="black" />
          </g>
          <g id="Vector_16">
            <path d={svgPaths.p11e29100} fill="black" />
          </g>
          <g id="Vector_17">
            <path d={svgPaths.pa64d7f0} fill="black" />
          </g>
          <g id="Vector_18">
            <path d={svgPaths.pd02c310} fill="black" />
          </g>
          <g id="Vector_19">
            <path d={svgPaths.p12851e00} fill="black" />
          </g>
          <g id="Vector_20">
            <path d={svgPaths.p16ef6d80} fill="black" />
          </g>
          <g id="Vector_21">
            <path d={svgPaths.p2d468800} fill="black" />
          </g>
          <g id="Vector_22">
            <path d={svgPaths.p38946a80} fill="black" />
          </g>
          <g id="Vector_23">
            <path d={svgPaths.p3454df00} fill="black" />
          </g>
          <g id="Vector_24">
            <path d={svgPaths.p13354200} fill="black" />
          </g>
          <g id="Vector_25">
            <path d={svgPaths.p13a61600} fill="black" />
          </g>
          <g id="Vector_26">
            <path d={svgPaths.p15c35e70} fill="black" />
          </g>
          <g id="Vector_27">
            <path d={svgPaths.p2ecac180} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 4" opacity="0">
          <g id="Vector">
            <path d={svgPaths.p2622d3f0} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2d9b2700} fill="black" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p2168c880} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 6" opacity="0">
          <g id="Vector">
            <path d={svgPaths.p24a46780} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p15a78300} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Group 8" opacity="0">
          <g id="Vector">
            <path d={svgPaths.p3f251d00} fill="black" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p3c0af7a8} fill="black" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p3b727100} fill="black" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.pe462600} fill="black" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p21b50e80} fill="black" />
          </g>
          <g id="Vector_6">
            <path d={svgPaths.p1acd7d40} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute h-[689px] left-[-34px] top-[-24px] w-[1018px]">
      <div className="absolute flex inset-[17.78%_37.82%_53.3%_41.78%] items-center justify-center">
        <div className="flex-none h-[137.425px] rotate-[30deg] w-[160.477px]">
          <Group7 />
        </div>
      </div>
      <Group6 />
      <div className="absolute flex inset-[49.53%_33.12%_28.77%_52.57%] items-center justify-center">
        <div className="flex-none h-[144.661px] rotate-[358deg] w-[140.803px]">
          <Group4 />
        </div>
      </div>
      <Frame55 />
      <div className="absolute flex h-[224.791px] items-center justify-center left-[438.55px] top-[410.21px] w-[195.813px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[325deg] scale-y-[-100%]">
          <div className="h-[210px] relative w-[92px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.pdf5e680} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[65.18%_42.31%_6.54%_35.57%] items-center justify-center">
        <div className="flex-none h-[95.012px] rotate-[34deg] w-[207.537px]">
          <Group2 />
        </div>
      </div>
      <div className="absolute flex inset-[63.47%_18.29%_-2.5%_55.78%] items-center justify-center">
        <div className="flex-none h-[155.706px] rotate-[312deg] w-[221.618px]">
          <Group1 />
        </div>
      </div>
      <div className="absolute flex h-[112.607px] items-center justify-center left-[423px] top-[534.88px] w-[121.235px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[69deg] scale-y-[-100%]">
          <div className="h-[98px] relative w-[83px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p2c58da00} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[57.62%_30.02%_14.1%_55.6%] items-center justify-center">
        <div className="flex-none h-[47.828px] rotate-[302deg] w-[199.85px]">
          <Group3 />
        </div>
      </div>
      <div className="absolute flex h-[156.055px] items-center justify-center left-[368.34px] top-[344.11px] w-[84.659px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[263deg] scale-y-[-100%]">
          <div className="h-[67px] relative w-[149px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p18980380} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[130.438px] items-center justify-center left-[616px] top-[500.36px] w-[125.183px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[42deg] scale-y-[-100%]">
          <div className="h-[126px] relative w-[55px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.pcb66440} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[41px] items-center justify-center left-[630px] top-[445px] w-[47px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[41px] relative w-[47px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p1b722c80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[62.362px] items-center justify-center left-[417.53px] top-[504.64px] w-[61.918px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[312deg] scale-y-[-100%]">
          <div className="h-[41px] relative w-[47px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p1b722c80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[62.362px] items-center justify-center left-[422.53px] top-[353.64px] w-[61.918px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[312deg] scale-y-[-100%]">
          <div className="h-[41px] relative w-[47px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p1b722c80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[118.265px] items-center justify-center left-[226.52px] top-[547.74px] w-[192.863px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[338deg] scale-y-[-100%]">
          <div className="h-[52px] relative w-[187px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p29db1b00} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[126.611px] items-center justify-center left-[545px] top-[341.28px] w-[145.086px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[31deg] scale-y-[-100%]">
          <div className="h-[72px] relative w-[126px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p2e2249f0} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[382px] top-[469px] w-[27px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[24px] relative w-[27px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
              <g id="Vector">
                <path d={svgPaths.p1b726f80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[665px] top-[475px] w-[27px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[24px] relative w-[27px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p1b726f80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[642px] top-[568px] w-[27px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[24px] relative w-[27px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
              <g id="Vector">
                <path d={svgPaths.p1b726f80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[65.14%_48.82%_8.68%_33.46%] items-center justify-center">
        <div className="flex-none h-[102.142px] rotate-[225deg] w-[153px]">
          <Group5 />
        </div>
      </div>
      <div className="absolute flex h-[101.719px] items-center justify-center left-[449.55px] top-[79.28px] w-[112.96px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[347deg] scale-y-[-100%]">
          <div className="h-[82px] relative w-[97px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Vector" opacity="0">
                <path d={svgPaths.p2b826c80} fill="black" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <div className="absolute h-[405px] left-[83px] top-[230px] w-[811px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 811 405">
          <g id="Ellipse 2">
            <path d={svgPaths.p1fce4b00} fill="url(#paint0_radial_2_969)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(5.99421 616.147 -1233.82 11.9736 399.722 6.37541)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_969" r="1">
              <stop offset="0.318389" stopColor="#3B82E6" />
              <stop offset="1" stopColor="#132D52" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Frame52 />
      <Frame59 />
      <div className="h-[636px] relative shrink-0 w-[952px]" data-name="young-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[2.11%] max-w-none top-[6.7%] w-[100.17%]" src={imgYoungPrettyWomanLookingHappyGoofyWithBroadFunLoonySmileEyesWideOpenAgainstWhiteWall2} />
        </div>
      </div>
    </div>
  );
}

function IconOutlinedDirectionsStraightArrowsUpRight2() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="icon / outlined / directions / straight arrows / up right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="icon / outlined / directions / straight arrows / up right">
          <path d="M12.25 29.75L29.75 12.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.25 12.25H29.75V29.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#3b82e6] relative rounded-[60px] shrink-0 w-[208px]">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[inherit] w-full">
        <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.56px]">Our Work</p>
        <IconOutlinedDirectionsStraightArrowsUpRight2 />
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[60px]" />
    </div>
  );
}

function Key() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.12)] h-[82px] left-[calc(50%-0.5px)] rounded-[50px] top-[683px] translate-x-[-50%] w-[383px]" data-name="Key">
      <div className="content-stretch flex gap-[16px] items-center justify-center overflow-clip pl-[10px] pr-[16px] py-[10px] relative rounded-[inherit] size-full">
        <Frame35 />
        <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal h-[54px] justify-center leading-[0] relative shrink-0 text-[28px] text-white tracking-[-0.56px] w-[131px]">
          <p className="leading-[1.19]">Contact Us</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[71px] h-[846px] items-end justify-center overflow-clip relative shrink-0 w-[1440px]">
      <Frame2 />
      <Frame5 />
      <Frame11 />
      <Frame53 />
      <Key />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[833px] items-center relative shrink-0">
      <Frame58 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="h-[400px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-20 size-full" src={imgFrame376} />
      </div>
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full pt-[130px]">
      <Frame8 />
      <Frame87 />
    </div>
  );
}

function Frame56() {
  return <div className="absolute h-[828px] left-0 overflow-clip right-0 top-[50px]" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1220px]">
      <p className="font-['Vast_Shadow:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#3b82e6] text-[0px] text-[64px] text-nowrap tracking-[-1.28px]">
        <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold">{`Our `}</span>
        <span className="font-['Urbanist:Bold',sans-serif] font-bold text-[#344054]">Services</span>
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-end left-0 p-[28px] w-[335.016px]">
      <div className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-full">
        <p className="mb-0">{`Electrical Power Distribution `}</p>
        <p>Panel</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="h-[412px] relative rounded-[33px] shrink-0 w-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[33px] size-full" src={imgFrame344} />
      <Frame73 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-end left-0 p-[28px] w-[335.016px]">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-full">Cleanroom Puf Panel</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="h-[412px] relative rounded-[21px] shrink-0 w-[335px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[21px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[21px] size-full" src={imgFrame347} />
        <div className="absolute bg-gradient-to-b from-[58.261%] from-[rgba(0,0,0,0)] inset-0 rounded-[21px] to-[#000000] via-[71.539%] via-[rgba(0,0,0,0.6)]" />
      </div>
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-end left-0 p-[28px] w-[335.016px]">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[24px] text-white tracking-[-0.48px] w-full">Industrial Electrical Light Fittings Service</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="h-[412px] relative rounded-[33px] shrink-0 w-[335px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[33px] size-full" src={imgFrame349} />
      <Frame80 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-between flex flex-wrap gap-[60px] h-[413px] items-start justify-center relative shrink-0 w-[1160px]">
      <Frame81 />
      <Frame84 />
      <Frame86 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f6faff] content-stretch flex flex-col gap-[40px] items-center ml-0 mt-0 overflow-clip pb-[80px] pt-[60px] px-[71px] relative rounded-[50px] w-[1288px]">
      <Frame56 />
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="[grid-area:1_/_1] bg-[#3b82e6] content-stretch flex items-center justify-center ml-0 mt-0 overflow-clip px-[60px] py-[24px] relative rounded-[90px]">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[30px] text-nowrap text-white tracking-[-0.6px]">See All</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-105px)] mt-[606px] place-items-start relative">
      <Frame74 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="[grid-area:1_/_1] bg-[#3b82e6] content-stretch flex gap-[24px] items-center justify-center ml-0 mt-0 overflow-clip px-[60px] py-[24px] relative rounded-[90px]">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[30px] text-nowrap text-white tracking-[-0.6px]">See All</p>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[14px] relative w-[12px]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                <path d="M7 1V15M7 1L13 7M7 1L1 7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-124px)] mt-[606px] place-items-start relative">
      <Frame82 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame54 />
      <Group8 />
      <Group9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[734px] items-end pl-0 pr-[267px] py-[80px] relative shrink-0 w-[456px]">
      <div className="flex items-center justify-center mr-[-267px] relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[rgba(59,130,230,0.4)] h-[580px] rounded-[58px] w-[454px]" />
        </div>
      </div>
      <div className="absolute h-[458px] left-[141px] top-[185px] w-[267px]">
        <div className="absolute inset-[-17.47%_-29.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 427 618">
            <g filter="url(#filter0_f_2_994)" id="Rectangle 23">
              <path d={svgPaths.p31c7800} fill="black" fillOpacity="0.25" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="618" id="filter0_f_2_994" width="427" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2_994" stdDeviation="40" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center mr-[-267px] relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[646px] relative w-[457px]" data-name="unsplash:HXbdghd1jJA">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[113.36%] left-[-3.45%] max-w-none top-[-7.46%] w-[106.81%]" src={imgUnsplashHXbdghd1JJa} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#344054] text-[0px] text-[64px] tracking-[-1.28px] w-full">
        <span>{`Why `}</span>
        <span className="font-['Urbanist:Bold',sans-serif] font-bold text-[#3b82e6]">{`Choose Us `}</span>?
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2939] text-[36px] tracking-[-0.72px]">10+ Years</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[#667085] text-[24px] tracking-[-0.48px]">Total Experience</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start leading-[normal] min-h-px min-w-px relative shrink-0 text-nowrap">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium relative shrink-0 text-[#1d2939] text-[36px] tracking-[-0.72px]">450+</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[#667085] text-[24px] tracking-[-0.48px]">Project Completed</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame16 />
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[52px] py-[24px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#151515] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#151515] text-[28px] text-nowrap tracking-[-0.56px]">Contact Us</p>
    </div>
  );
}

function SkillIconsInstagram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[78px]" data-name="skill-icons:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 78">
        <g id="Group">
          <path d={svgPaths.p224e1600} fill="url(#paint0_radial_2_883)" id="Vector" />
          <path d={svgPaths.p224e1600} fill="url(#paint1_radial_2_883)" id="Vector_2" />
          <g id="Vector_3">
            <path d={svgPaths.p11ea9a00} fill="white" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(20.7187 84.0075) rotate(-90) scale(77.3038 71.8986)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_883" r="1">
            <stop stopColor="#FFDD55" />
            <stop offset="0.1" stopColor="#FFDD55" />
            <stop offset="0.5" stopColor="#FF543E" />
            <stop offset="1" stopColor="#C837AB" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-13.0653 5.61874) rotate(78.681) scale(34.5552 142.438)" gradientUnits="userSpaceOnUse" id="paint1_radial_2_883" r="1">
            <stop stopColor="#3771C8" />
            <stop offset="0.128" stopColor="#3771C8" />
            <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[49px] items-start relative shrink-0">
      <div className="h-[82px] relative shrink-0 w-[88px]" data-name="IndiaMART Symbol PNG 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIndiaMartSymbolPng1} />
      </div>
      <SkillIconsInstagram />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#151515] text-[28px] text-nowrap tracking-[-0.56px]">Contact Here</p>
      <Frame31 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[124px] items-end relative shrink-0 w-full">
      <Frame3 />
      <Frame36 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[763px]">
      <Frame15 />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1d2939] text-[24px] tracking-[-0.48px] w-[567px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales `}</p>
      <Frame17 />
      <Frame37 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[739px] items-center justify-between p-[16px] relative shrink-0 w-[1299px]">
      <div className="absolute left-[-110px] size-[436px] top-[-122px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 436 436">
          <circle cx="218" cy="218" id="Ellipse 3" r="210" stroke="var(--stroke-0, #95B0D6)" strokeOpacity="0.5" strokeWidth="16" />
        </svg>
      </div>
      <div className="absolute left-[955px] size-[531px] top-[400px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 531 531">
          <circle cx="265.5" cy="265.5" id="Ellipse 4" r="233.5" stroke="var(--stroke-0, #95B0D6)" strokeOpacity="0.2" strokeWidth="64" />
        </svg>
      </div>
      <Frame10 />
      <Frame64 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f6faff] content-stretch flex flex-col items-center overflow-clip p-[80px] relative rounded-[50px] shrink-0 w-[1288px]">
      <Frame18 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1298px]">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#344054] text-[0px] text-nowrap tracking-[-1.28px]">
        <p className="leading-[normal] text-[64px]">
          <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold">{`Our Trusted  `}</span>
          <span className="font-['Urbanist:Bold',sans-serif] font-bold text-[#3b82e6]">Partners</span>
        </p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[82px] items-center relative shrink-0">
      <div className="h-[191px] relative shrink-0 w-[204px]" data-name="IndiaMART Symbol PNG 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIndiaMartSymbolPng1} />
      </div>
      <div className="h-[191px] relative shrink-0 w-[204px]" data-name="IndiaMART Symbol PNG 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIndiaMartSymbolPng1} />
      </div>
      <div className="h-[191px] relative shrink-0 w-[204px]" data-name="IndiaMART Symbol PNG 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIndiaMartSymbolPng1} />
      </div>
      <div className="h-[191px] relative shrink-0 w-[204px]" data-name="IndiaMART Symbol PNG 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIndiaMartSymbolPng1} />
      </div>
      <div className="h-[191px] relative shrink-0 w-[204px]" data-name="IndiaMART Symbol PNG 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIndiaMartSymbolPng1} />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#f6faff] h-[425px] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[45px] items-center px-[82px] py-[34px] relative size-full">
          <Frame77 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#344054] text-[0px] text-nowrap tracking-[-1.28px]">
        <p className="leading-[normal] text-[64px]">
          <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold">{`Lets have a look at my `}</span>
          <span className="font-['Urbanist:Bold',sans-serif] font-bold text-[#3b82e6]">Previous Work</span>
        </p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[32px] py-[15px] relative rounded-[24px] shrink-0" data-name="Component 6">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap">Transportation</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[32px] py-[15px] relative rounded-[24px] shrink-0" data-name="Component 5">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap">Product Development</p>
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[32px] py-[15px] relative rounded-[24px] shrink-0" data-name="Component 2">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap">Civil</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[32px] py-[15px] relative rounded-[24px] shrink-0" data-name="Component 3">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap">Glass Crockery</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[32px] py-[15px] relative rounded-[24px] shrink-0" data-name="Component 4">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black text-nowrap">Electrical</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0">
      <Component4 />
      <Component3 />
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function UiIconArrowDownLight() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="UI icon/arrow_down/light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="UI icon/arrow_down/light">
          <path d={svgPaths.p20a70100} fill="var(--fill-0, #3B82E6)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[15px] relative rounded-[57px] size-[61px]">
      <div aria-hidden="true" className="absolute border-4 border-[#3b82e6] border-solid inset-0 pointer-events-none rounded-[57px]" />
      <UiIconArrowDownLight />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[62.055px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[269deg]">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-[131px] items-end p-[10px] relative shrink-0 w-[561px]">
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal h-[57px] justify-center leading-[0] relative shrink-0 text-[#fffaf5] text-[66px] tracking-[-1.32px] w-[290px]">
        <p className="leading-[normal]">Sky Bill</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px relative shrink-0">
      <Frame40 />
      <Frame30 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex h-[351px] items-center justify-center p-[10px] relative rounded-[19px] shrink-0 w-[599px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[19px]">
        <div className="absolute bg-white inset-0 rounded-[19px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[19px] size-full" src={imgFrame26} />
        <div className="absolute inset-0 rounded-[19px]" style={{ backgroundImage: "linear-gradient(192.533deg, rgba(0, 0, 0, 0) 33.316%, rgba(0, 0, 0, 0.416) 78.02%, rgba(0, 0, 0, 0.8) 103.58%)" }} />
      </div>
      <Frame20 />
    </div>
  );
}

function UiIconArrowDownLight1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="UI icon/arrow_down/light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="UI icon/arrow_down/light">
          <path d={svgPaths.p20a70100} fill="var(--fill-0, #3B82E6)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[15px] relative rounded-[57px] size-[61px]">
      <div aria-hidden="true" className="absolute border-4 border-[#3b82e6] border-solid inset-0 pointer-events-none rounded-[57px]" />
      <UiIconArrowDownLight1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 size-[62.055px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[269deg]">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex h-[131px] items-end p-[10px] relative shrink-0 w-[561px]">
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] font-normal h-[57px] justify-center leading-[0] relative shrink-0 text-[#fffaf5] text-[66px] tracking-[-1.32px] w-[290px]">
        <p className="leading-[normal]">Poke Yoe</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[351px] items-center justify-center p-[10px] relative rounded-[19px] shrink-0 w-[599px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[19px]">
        <div className="absolute bg-white inset-0 rounded-[19px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[19px] size-full" src={imgFrame28} />
        <div className="absolute inset-0 rounded-[19px]" style={{ backgroundImage: "linear-gradient(192.533deg, rgba(0, 0, 0, 0) 33.316%, rgba(0, 0, 0, 0.416) 78.02%, rgba(0, 0, 0, 0.8) 103.58%)" }} />
      </div>
      <Frame22 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-between px-[28px] py-0 relative shrink-0 w-[1288px]">
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame66 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1288px]">
      <Frame24 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="[grid-area:1_/_1] bg-[#3b82e6] content-stretch flex gap-[24px] items-center justify-center ml-0 mt-0 overflow-clip px-[60px] py-[24px] relative rounded-[90px]">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[30px] text-nowrap text-white tracking-[-0.6px]">See All</p>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[14px] relative w-[12px]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
                <path d="M7 1V15M7 1L13 7M7 1L1 7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame85 />
    </div>
  );
}

function IconOutlinedDirectionsStraightArrowsDownRight() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="icon / outlined / directions / straight arrows / down right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="icon / outlined / directions / straight arrows / down right">
          <path d="M7 7L17 17" id="Vector" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17 7V17H7" id="Vector_2" stroke="var(--stroke-0, #FCFCFD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#3b82e6] content-stretch flex items-center justify-center p-[12px] relative rounded-[60px] size-[58px]">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82e6] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <IconOutlinedDirectionsStraightArrowsDownRight />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['Urbanist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#344054] text-[0px] text-nowrap tracking-[-0.96px]">
        <p className="leading-[normal] text-[48px]">
          <span>{`All Engineering `}</span>
          <span className="text-[#3b82e6] tracking-[-0.96px]">Solution</span>
        </p>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[58px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[170px] items-center relative shrink-0">
      <Frame26 />
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal h-[61px] justify-center leading-[0] relative shrink-0 text-[#667085] text-[24px] text-center tracking-[-0.48px] w-[828px]">
        <p className="leading-[normal]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[1298px]">
      <Frame72 />
      <Frame75 />
      <Frame83 />
      <Group11 />
      <Frame76 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
      <p className="font-['Urbanist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#fcfcfd] text-[0px] text-[56px] text-center text-nowrap tracking-[-1.12px]">
        <span>
          Have an Awesome Project
          <br aria-hidden="true" />
          {`Idea? `}
        </span>
        <span className="font-['Urbanist:Bold',sans-serif] font-bold text-[#3b82e6]">{`Let's Discuss`}</span>
      </p>
      <div className="absolute h-[24px] left-[884px] top-[-12px] w-[23px]">
        <div className="absolute inset-[-6.25%_-6.52%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0005 27.0004">
            <path d={svgPaths.p8650980} id="Vector 1" stroke="var(--stroke-0, #3B82E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[907px] size-[21.72px] top-[98.01px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[2deg] scale-y-[-100%]">
          <div className="relative size-[21px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
              <g id="Vector">
                <path d={svgPaths.p390991c0} fill="#FCFCFD" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex h-[55px] items-center px-[39px] py-[21px] relative rounded-[16px] shrink-0 w-[804px]">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(252,252,253,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fcfcfd] text-[20px] text-center text-nowrap tracking-[-0.2px]">Your Name</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex h-[55px] items-center px-[39px] py-[21px] relative rounded-[16px] shrink-0 w-[387px]">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(252,252,253,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fcfcfd] text-[20px] text-center text-nowrap tracking-[-0.2px]">E-mail</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex h-[55px] items-center px-[39px] py-[21px] relative rounded-[16px] shrink-0 w-[387px]">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(252,252,253,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fcfcfd] text-[20px] text-center text-nowrap tracking-[-0.2px]">Number</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[30px] items-start justify-center relative shrink-0 w-[802px]">
      <Frame61 />
      <Frame57 />
    </div>
  );
}

function LucideChevronUp() {
  return (
    <div className="relative size-[30px]" data-name="lucide:chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="lucide:chevron-up">
          <path d="M22 18L14 11L7 18" id="Vector" stroke="var(--stroke-0, #D3D2D3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 grow h-[55px] min-h-px min-w-px relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(252,252,253,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[39px] pr-[15px] py-[21px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fcfcfd] text-[20px] text-center text-nowrap tracking-[-0.2px]">Services</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <LucideChevronUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[802px]">
      <Frame62 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex h-[136px] items-start px-[39px] py-[21px] relative rounded-[16px] shrink-0 w-[802px]">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(252,252,253,0.8)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#fcfcfd] text-[20px] text-center text-nowrap tracking-[-0.2px]">Description</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#3b82e6] content-stretch flex h-[56px] items-center justify-center overflow-clip px-[53px] py-[21px] relative rounded-[16px] shrink-0 w-[804px]">
      <p className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[26px] text-nowrap text-white tracking-[-0.52px]">Contact Us</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip pb-[53px] pt-[48px] px-[63px] relative rounded-[50px] shrink-0 w-[1288px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <div className="absolute bg-[#161414] inset-0 rounded-[50px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover opacity-10 rounded-[50px] size-full" src={imgFrame341} />
      </div>
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame63 />
      <Frame65 />
      <Frame47 />
    </div>
  );
}

function VuesaxBoldFacebook() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="facebook">
          <g id="BG 111" opacity="0.58"></g>
          <path d={svgPaths.p1c815f80} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldFacebook1() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="vuesax/bold/facebook">
      <VuesaxBoldFacebook />
    </div>
  );
}

function VuesaxBoldYoutube() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="youtube">
          <g id="BG 165" opacity="0.58"></g>
          <path d={svgPaths.p32d52a00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldYoutube1() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="vuesax/bold/youtube">
      <VuesaxBoldYoutube />
    </div>
  );
}

function VuesaxBoldWhatsapp() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/whatsapp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="whatsapp">
          <g id="BG 164" opacity="0.58"></g>
          <path d={svgPaths.pc7f6300} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldWhatsapp1() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="vuesax/bold/whatsapp">
      <VuesaxBoldWhatsapp />
    </div>
  );
}

function VuesaxBoldInstagram() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="instagram">
          <path d={svgPaths.p9b7f640} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldInstagram1() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="vuesax/bold/instagram">
      <VuesaxBoldInstagram />
    </div>
  );
}

function UiIconTwitterFilled() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="UI icon/twitter/filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="UI icon/twitter/filled">
          <path d={svgPaths.p3439c0c0} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <VuesaxBoldFacebook1 />
      <VuesaxBoldYoutube1 />
      <VuesaxBoldWhatsapp1 />
      <VuesaxBoldInstagram1 />
      <UiIconTwitterFilled />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col h-[239px] items-start justify-between relative shrink-0 w-[579px]">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[normal] min-w-full relative shrink-0 text-[#fcfcfd] text-[0px] tracking-[-0.3px] w-[min-content]">
        <p className="font-['Montserrat:Medium',sans-serif] font-medium mb-0 text-[36px] tracking-[-0.72px]">AV Autotech</p>
        <p className="mb-0 text-[36px]">&nbsp;</p>
        <p className="text-[20px] tracking-[-0.4px]">{`F No 011 SR No 41 41 & 59, Building B Forest County, Fountain Road, Kharadi, Meridian Ice Cream, Pune-411014, Maharashtra, India`}</p>
      </div>
      <Frame68 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[20px] items-start leading-[0] relative shrink-0 text-[#fcfcfd] text-[16px] text-nowrap tracking-[-0.32px]">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">Home</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">About Us</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">Service</p>
      </div>
      <div className="flex flex-col font-['Urbanist:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">Project</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0">
      <div className="flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b82e6] text-[20px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[normal]">Navigation</p>
      </div>
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col font-['Urbanist:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] relative shrink-0 text-[#fcfcfd] text-[16px] text-nowrap tracking-[-0.32px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">+91 000000000</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">bricks.build@gmail.com</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">Portfolio-Bricks</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0">
      <div className="flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b82e6] text-[20px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[normal]">Contact</p>
      </div>
      <Frame50 />
    </div>
  );
}

function IconOutlinedDirectionsStraightArrowsUpRight3() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="icon / outlined / directions / straight arrows / up right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="icon / outlined / directions / straight arrows / up right">
          <path d="M12.25 29.75L29.75 12.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12.25 12.25H29.75V29.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="bg-[#3b82e6] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[60px] shrink-0 w-[202px]" data-name="Component 12">
      <p className="font-['Urbanist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[28px] text-nowrap text-white tracking-[-0.56px]">Contact Us</p>
      <IconOutlinedDirectionsStraightArrowsUpRight3 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0">
      <div className="flex flex-col font-['Urbanist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b82e6] text-[20px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[normal]">Connect With Us</p>
      </div>
      <Component5 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-start justify-between px-[36px] py-0 relative shrink-0 w-[1285px]">
      <Frame48 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="h-[533px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[4px] size-full" src={imgFrame326} />
        <div className="absolute bg-[rgba(39,39,39,0.9)] inset-0 rounded-[4px]" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center pb-0 pl-[84px] pr-[23px] pt-[25px] relative size-full">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_-0.07%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1409 2">
                <path d="M1 1H1408" id="Line 5" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <Frame51 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_-0.07%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1409 2">
                <path d="M1 1H1408" id="Line 5" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full">
      <HeroContainer />
      <ServicesSection />
      <TestimonialsSection />
      <ProjectsSection />
      <FeaturesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

// Semantic name mapping for main sections
function HeroContainer() { return Frame32(); }
function ServicesSection() { return Group10(); }
function TestimonialsSection() { return Frame60(); }
function ProjectsSection() { return Frame39(); }
function FeaturesSection() { return Frame43(); }
function ContactSection() { return Frame78(); }
function FooterSection() { return Frame67(); }