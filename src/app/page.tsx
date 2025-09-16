"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import BrandValuesSection from "@/components/Sections/BrandValuesSection";
import FeaturedProductsSection from "@/components/Sections/FeaturedProductsSection";
import CollectionsSection from "@/components/Sections/CollectionsSection";
import BrandStorySection from "@/components/Sections/BrandStorySection";
import ServicesSection from "@/components/Sections/ServicesSection";
import Footer from "@/components/Footer/Footer";
import Collection from "@/components/Collection/Collection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <BrandValuesSection />
      <FeaturedProductsSection />
      <CollectionsSection />
      <Collection/>
      <BrandStorySection />
      <ServicesSection />
      <Footer/>
    </>
  );
};

export default LandingPage;
