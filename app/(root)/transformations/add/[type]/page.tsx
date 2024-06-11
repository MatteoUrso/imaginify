import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import { notFound } from "next/navigation";
import TransformationForm from "@/components/shared/TransformationForm";

function AddTransformationTypePage({ params: { type } }: SearchParamProps) {
  const transformation = transformationTypes[type];

  // If not found, redirect to 404 page
  if (!transformation) notFound();

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm />
    </>
  );
}

export default AddTransformationTypePage;
