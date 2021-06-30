import { PropsWithChildren } from "react";
import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import {
	Box,
	BoxProps,
	chakra,
	Link as ChakraLink,
	LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { StrapiImageType } from "../pages/kurzy/[slug]";
import NextImage from "next/image";
import { omit } from "lodash-es";

export type NextChakraLinkProps = PropsWithChildren<
	NextLinkProps & Omit<ChakraLinkProps, "as">
>;

//  Has to be a new component because both chakra and next share the `as` keyword
export const NextChakraLink = ({
	href,
	as,
	replace,
	scroll,
	shallow,
	prefetch,
	children,
	...chakraProps
}: NextChakraLinkProps) => {
	return (
		<NextLink
			passHref={true}
			href={href}
			as={as}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			prefetch={prefetch}
		>
			<ChakraLink {...chakraProps}>{children}</ChakraLink>
		</NextLink>
	);
};

const WrappedNextImage = chakra(NextImage, {
	shouldForwardProp: (prop) =>
		["width", "height", "src", "alt", "layout", "priority"].includes(prop),
});

type Format = "large" | "medium" | "small" | "thumbnail";

export const StrapiNextImage = (
	props: {
		strapiImage: StrapiImageType;
		format?: Format;
		priority?: boolean;
	} & BoxProps
) => {
	const propsWithoutStrapiImage = omit(props, "strapiImage");
	return (
		<Box
			{...propsWithoutStrapiImage}
			position={"relative"}
			overflow={"hidden"}
		>
			<WrappedNextImage
				priority={props.priority ?? false}
				layout={"fill"}
				objectFit={"cover"}
				// @ts-ignore
				placeholder={"blur"}
				alt={props.strapiImage.alternativeText}
				src={getStrapiImageUrl(props.strapiImage, props.format)}
			/>
		</Box>
	);
};
export const getStrapiImageUrl = (
	strapiImage: StrapiImageType,
	format?: Format
) => {
	if (format) {
		return strapiImage.provider === "local"
			? `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImage.formats[format].url}`
			: strapiImage.formats[format].url;
	}
	return strapiImage.provider === "local"
		? `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImage.url}`
		: strapiImage.url;
};
