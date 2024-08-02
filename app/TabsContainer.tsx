'use client';

import { Tab, Tabs } from '@nextui-org/tabs';
import { usePathname } from 'next/navigation';

export default function Component() {
	const selectedKey = usePathname().split('/').at(-1);
	return <Tabs selectedKey={selectedKey || '1'}>
	  <Tab key='1' title='Page 1' href='/' />
	  <Tab key='2' title='Page 2' href='/2' />
	</Tabs>;
}
