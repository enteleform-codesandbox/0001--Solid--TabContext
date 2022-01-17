import * as Tab from "./Tab"


export function App(){
	return (
		<Tab.Container active="A">

			<Tab.List>
				<Tab.Button id="A"/>
				<Tab.Button id="B"/>
			</Tab.List>

			<Tab.Panels>
				<Tab.Panel id="A">
					{"Tab Content 'A'"}
				</Tab.Panel>

				<Tab.Panel id="B">
					{"Tab Content 'B'"}
				</Tab.Panel>
			</Tab.Panels>

		</Tab.Container>
	)
}
