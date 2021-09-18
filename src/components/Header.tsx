import React from "react";
import { Link } from "gatsby";
import { Popover } from "@headlessui/react";
import { Divide as Hamburger } from "hamburger-react";
import Logo from "./Logo";
import navigation from "../../content/navigation.yml";

interface Props {}

const Header: React.FC<Props> = (_props) => {
	return (
		<nav className="flex justify-between">
			<Link
				to="/"
				as="div"
				className="flex h-12 self-start items-center px-2 nodefault colors-dark dark:colors-light rounded-br"
			>
				<Logo className="colors-dark dark:colors-light" />
			</Link>

			<div className="colors-dark dark:colors-light rounded-bl">
				{/* Dropdown Menu */}
				<Popover className="flex flex-col sm:hidden">
					{({ open }) => (
						<>
							<Popover.Button className="ml-auto rounded-bl colors-dark dark:colors-light">
								<Hamburger toggled={open} size={25} />
							</Popover.Button>

							<Popover.Panel className="relative flex flex-col items-end justify-between p-4 w-full">
								{navigation.map(({ title, url }) => (
									<Link
										to={url}
										className="nodefault text-lg"
										activeClassName="underline"
									>
										<h1>{title}</h1>
									</Link>
								))}
							</Popover.Panel>
						</>
					)}
				</Popover>

				{/* Regular Menu */}
				<div className="items-center space-x-2 px-4 hidden h-full sm:flex">
					{navigation.map(({ title, url }) => (
						<Link
							to={url}
							className="nodefault text-lg"
							activeClassName="underline"
						>
							<h1 className="text-xl">{title}</h1>
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Header;
