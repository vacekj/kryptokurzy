import { PropsWithChildren } from "react";
import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import {
	ImageProps,
	Link as ChakraLink,
	LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { StrapiImageType } from "../pages/kurzy/[slug]";
import { Image } from "@chakra-ui/react";

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

export const StrapiImage = (
	props: {
		strapiImage: StrapiImageType;
	} & ImageProps
) => {
	return (
		<Image
			width={props.strapiImage.width}
			height={props.strapiImage.height}
			src={getStrapiImageUrl(props.strapiImage)}
			{...props}
		/>
	);
};

export const getStrapiImageUrl = (strapiImage: StrapiImageType) => {
	return strapiImage.provider === "local"
		? `${process.env.NEXT_PUBLIC_STRAPI_URL}${strapiImage.url}`
		: strapiImage.url;
};
