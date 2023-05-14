import React from 'react'
import styles from '../../styles/department.module.css'
import { EventCard, CoordCard, Footer, Header } from '@/components'

const DeptLayout = ({ deptName, deptCoordName, deptImage, deptDesc, eventsArr, coordArr, subCoordArr }) => {
	return (
		<>
			<Header selected={'Departments'} />
			<div className={styles.parentDiv}>
				<DeptTitle deptName={deptName} deptCoordName={deptCoordName} deptImage={deptImage} />
				<DeptDescription deptDesc={deptDesc} />
				<EventCards eventsArr={eventsArr} />
				<CoordSection coordArr={coordArr} subCoordArr={subCoordArr} />
				<Footer />
			</div>
		</>
	)
}

const DeptTitle = ({ deptName, deptCoordName, deptImage }) => {
	return (
		<div className={styles.deptTitle}>
			<div>
				<h1>{deptName}</h1>
				<h4>Coordinator: {deptCoordName}</h4>
			</div>
			<img src={deptImage} />
		</div>
	)
}

const DeptDescription = ({ deptDesc }) => {
	return (
		<div className={styles.deptDesc}>
			<p>{deptDesc}</p>
		</div>
	)
}

const EventCards = ({ eventsArr }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.sectionHeading}>Events</h2>
			<div className={styles.cardSection}>
				{eventsArr.map((event) => {
					return <EventCard key={event.key} old={event.old} eventName={event.eventName} desc={event.desc} image={event.image} registerLink={event.registerLink} />
				})}
			</div>
		</div>
	)
}

const CoordSection = ({ coordArr, subCoordArr }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.sectionHeading}>Team</h2>
			<div className={styles.cardSection}>
				{coordArr.map((coord) => {
					return <CoordCard key={coord.key} coordName={coord.coordName} coordImage={coord.coordImage} coordCommitee={coord.coordCommitee} coordLinkedIn={coord.coordLinkedIn} coordGitHub={coord.coordGitHub} />
				})}
			</div>
			<div className={styles.cardSection}>
				{subCoordArr.map((subCoord) => {
					return <CoordCard key={subCoord.key} coordName={subCoord.coordName} coordImage={subCoord.coordImage} coordCommitee={subCoord.coordCommitee} coordLinkedIn={subCoord.coordLinkedIn} coordGitHub={subCoord.coordGitHub} />
				})}
			</div>
		</div>
	)
}

export default DeptLayout
