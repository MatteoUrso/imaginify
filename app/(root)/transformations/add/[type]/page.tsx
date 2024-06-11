import Header from "@/components/shared/Header";
import React from "react";
import { transformationTypes } from "@/constants";
import { notFound, redirect } from "next/navigation";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";

async function AddTransformationTypePage({
  params: { type },
}: SearchParamProps) {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  // If not authenticated, redirect to sign-in page
  if (!userId) redirect("/sign-in");

  // If not found, redirect to 404 page
  if (!transformation) notFound();

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
}

export default AddTransformationTypePage;
