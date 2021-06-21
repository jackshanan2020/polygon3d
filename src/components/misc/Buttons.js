import tw from "twin.macro";
import styled from "styled-components";

export const PrimaryButtonBase = tw.button`
	px-8 py-3 rounded bg-primary-500 text-gray-100 font-bold  transition duration-300

	hocus:bg-primary-500 hocus:text-gray-200
	focus:outline-none focus:shadow-outline`;

export const PrimaryButton = styled(PrimaryButtonBase)(props => [
	tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
	props.buttonRounded && tw`rounded-full`
]);