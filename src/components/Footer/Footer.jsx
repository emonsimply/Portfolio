import NavItems from "../shared/NavItems";

const Footer = () => {
  return (
    <footer className="py-8 text-center max-w-7xl mx-auto rounded-t-full">
      <NavItems className="justify-center mb-12 gap-6" />
      <p className="font-one text-[11px] text-secondary mt-12">
        Copyright © 2025 Foysal Islam Emon. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
