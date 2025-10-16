"use client";

import Image, { ImageProps } from "next/image";
import React from "react";
import clsx from "clsx";

type AspectImageProps = Omit<ImageProps, "fill" | "width" | "height"> & {
  ratio?: string; // e.g., "16 / 9", "1 / 1"
  wrapperClassName?: string;
  imageClassName?: string;
  children?: React.ReactNode; // optional overlay content
};

/**
 * AspectImage
 * - Ensures a consistent aspect ratio regardless of display size using CSS aspect-ratio
 * - Uses next/image with fill and object-cover to avoid distortion
 */
export function AspectImage({
  ratio = "16 / 9",
  wrapperClassName,
  imageClassName,
  alt,
  src,
  sizes,
  priority,
  placeholder,
  blurDataURL,
  children,
  ...rest
}: AspectImageProps) {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden rounded-xl border border-white/20",
        wrapperClassName
      )}
      style={{ aspectRatio: ratio }}
   >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={clsx("object-cover", imageClassName)}
        {...rest}
      />
      {children}
    </div>
  );
}

export default AspectImage;
