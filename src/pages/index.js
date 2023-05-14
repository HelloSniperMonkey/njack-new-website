import Head from 'next/head'
//import Image from 'next/image'
//import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { CoordCard, SubCoordCard, DeptCard, EventCard, Footer, Header } from '@/components'
import { members } from './members'

//const inter = Inter({ subsets: ['latin'] })
//Unused font

export default function Home() {
	return (
		<>
			<Head>
				<title>NJACK</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header selected={'Home'} />
			<div className={styles.parentDiv}>
				<div className={styles.heroSection}>
					<img loading='lazy' src='/home/NJACK logo.svg' alt='NJACK Logo' />
					<div className={styles.heroText}>NJACK</div>
					<div className={styles.subHeroText}>Not just another Computer Science Klub</div>
				</div>
				<div className={styles.aboutSection}>
					<h2>About us</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, dolores. Sequi commodi nobis laudantium, quod quisquam tempore dolor veritatis consectetur ratione aut labore possimus at, minus eum magni architecto
						adipisci. Odit similique dicta deleniti, quisquam qui cupiditate dolores.{'\n\n'}Enim adipisci vel nihil aspernatur pariatur neque doloremque deleniti, quidem temporibus, voluptatum, ducimus beatae id. Voluptatibus, ab
						asperiores minus quod voluptate rem.
					</p>
				</div>
				<div className={styles.section} style={{ backgroundColor: '#F1F1F1' }}>
					<h2 className={styles.sectionHeading}>Upcoming Events</h2>
					<div className={styles.cardSection}>
						{/* TODO: Add the event cards as a components */}
						<EventCard image={'/home/heroImage.png'} eventName={'Paper Reading Session'} desc={'Paper reading session covering linear regression'} registerLink={'#'} />
						<EventCard image={'/home/heroImage.png'} eventName={'CSS Workshop'} desc={'CSS Workshop covering intermediate and advanced CSS'} registerLink={'#'} />
						<EventCard image={'/home/heroImage.png'} eventName={'Contest Discussion'} desc={'Monthly contest disscussion'} registerLink={'#'} />
						<EventCard image={'/home/heroImage.png'} eventName={'Cybersecurity 101'} desc={'Basic introduction to the cybersecurity'} registerLink={'#'} />
					</div>
				</div>
				<div className={styles.section}>
					<h2 className={styles.sectionHeading}>Our Departments</h2>
					<div className={styles.cardSection}>
						{/* TODO: Add the department cards as a components */}
						<DeptCard
							deptName={'Competitive Programming'}
							deptImage={'/home/heroImage.png'}
							deptDesc={
								'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga similique debitis illum, officiis minima enim iusto magnam maxime perspiciatis, delectus laudantium? Corporis illum, vero est aliquam exercitationem tempore nulla modi earum.'
							}
							deptLink={'/departments/cp'}
							bgColor={'#FF6559'}
						/>
						<DeptCard
							deptName={'Dev and OS'}
							deptImage={'/home/heroImage.png'}
							deptDesc={
								'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga similique debitis illum, officiis minima enim iusto magnam maxime perspiciatis, delectus laudantium? Corporis illum, vero est aliquam exercitationem tempore nulla modi earum.'
							}
							deptLink={'/departments/devos'}
							bgColor={'#0091BD'}
						/>
						<DeptCard
							deptName={'Machine Learning'}
							deptImage={'/home/heroImage.png'}
							deptDesc={
								'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga similique debitis illum, officiis minima enim iusto magnam maxime perspiciatis, delectus laudantium? Corporis illum, vero est aliquam exercitationem tempore nulla modi earum.'
							}
							deptLink={'/departments/ml'}
							bgColor={'#FFAC2A'}
						/>
						<DeptCard
							deptName={'Cyber Securities'}
							deptImage={'/home/heroImage.png'}
							deptDesc={
								'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga similique debitis illum, officiis minima enim iusto magnam maxime perspiciatis, delectus laudantium? Corporis illum, vero est aliquam exercitationem tempore nulla modi earum.'
							}
							deptLink={'/departments/cybersec'}
							bgColor={'#6EEDF3'}
						/>
					</div>
				</div>
				<div className={styles.section}>
					<h2 className={styles.sectionHeading}>Our Team</h2>
					<h3>Coordinators</h3>
					<div className={styles.cardSection}>
						{/* TODO: Add the coordinator cards as a components */}
						{members[0].map((member) => {
							if (member.committee === 'Overall Coordinator') {
								return <CoordCard coordName={member.name} coordImage={member.image} coordCommitee={member.committee} coordLinkedIn={member.linkedin} coordGitHub={member.github} />
							}
						})}
					</div>
					<div className={styles.cardSection}>
						{members[0].map((member) => {
							if (member.committee !== 'Overall Coordinator') {
								return <CoordCard coordName={member.name} coordImage={member.image} coordCommitee={member.committee} coordLinkedIn={member.linkedin} coordGitHub={member.github} />
							}
						})}
					</div>
					<h3>Sub-Coordinators</h3>
					<div className={styles.cardSection}>
						{/* TODO: Add the team cards as a components */}
						<div className={styles.committee}>
							<p>Competitive Programming</p>
							{members[1].map((member) => {
							if(member.committee === 'CP'){
							return (<SubCoordCard coordName={member.name} coordLinkedIn={member.linkedin}></SubCoordCard>)
							}})}
						</div>
						<div className={styles.committee}>
							<p>Development & Open Source</p>
							{members[1].map((member) => {
							if(member.committee === 'Dev&OS'){
							return (<SubCoordCard coordName={member.name} coordLinkedIn={member.linkedin}></SubCoordCard>)
							}})}
						</div>
						<div className={styles.committee}>
							<p>Machine Learning</p>
							{members[1].map((member) => {
							if(member.committee === 'ML'){
							return (<SubCoordCard coordName={member.name} coordLinkedIn={member.linkedin}></SubCoordCard>)
							}})}
						</div>
						<div className={styles.committee}>
							<p>Cyber Securities</p>
							{members[1].map((member) => {
							if(member.committee === 'CyberSec'){
							return (<SubCoordCard coordName={member.name} coordLinkedIn={member.linkedin}></SubCoordCard>)
							}})}
						</div>
					</div>
				</div>
				<img
					alt='TeamWork'
					src='\home\team.png'
					style={{
						alignSelf: 'end',
						marginInline: '5%',
						maxWidth: '90vw',
						maxHeight: '25vh',
						objectFit: 'contain',
					}}
				/>
				<Footer />
			</div>
		</>
	)
}
