import { redirect } from 'next/navigation';

export default async function NavigationHome() {
    redirect('/welcome');
}