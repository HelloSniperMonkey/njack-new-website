import { useEffect } from 'react';
import styles from '../styles/department.module.css';
import { EventCard, CoordCard, Footer, Header } from '@/components';
import { motion } from 'framer-motion';
import DisplayLottie from '@/components/Lottie';
import Head from 'next/head';
import Background from '@/components/Background';
import { useRouter } from 'next/router';
import ApeireonCard from '@/components/apeireonCard/apeireonCard';

export default function apeireon({ events, coords, subcoords }) {
  const coordDevOS = coords;
  const subCoordDevOS = subcoords;
  const coordArr = [];
  const subCoordArr = [];
  const apeireonEvents = [];
  for (let i = 0; i < coordDevOS.length; i++) {
    coordArr.push({
      key: i + 1,
      coordName: coordDevOS[i].name,
      coordImage: coordDevOS[i].image,
      coordCommittee: coordDevOS[i].committee,
      coordLinkedIn: coordDevOS[i].linkedin,
      coordGitHub: coordDevOS[i].github,
      coordCFHandle: coordDevOS[i].cfhandle
    });
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < subCoordDevOS.length; i++) {
    subCoordArr.push({
      key: i + 1,
      coordName: subCoordDevOS[i].name,
      coordImage: subCoordDevOS[i].image,
      coordCommittee: subCoordDevOS[i].committee,
      coordLinkedIn: subCoordDevOS[i].linkedin,
      coordGitHub: subCoordDevOS[i].github,
      coordCFHandle: subCoordDevOS[i].cfhandle
    });
  }

  for (let i = 0; i < events.length; i++) {
    if (events[i].dept === 'Apeireon') {
      apeireonEvents.push(events[i]);
    }
  }
  const router = useRouter();
  //   useEffect(() => {
  //     if (router.pathname !== pageLink) router.replace('/');
  //   }, []);
  return (
    <>
      <Head>
        <title>{`NJACK | Apeireon`}</title>
      </Head>
      <Header selected={'Apeireon'} />
      <Background />
      <div className={styles.parentDiv}>
        <div className={styles.aboutDept}>
          <DeptTitle
            deptName="Apeireon"
            // deptCoordName={deptCoordName}
            deptImage="/home/apeireon.png"
          />
          <DeptDescription deptDesc="Hi this section is all about Apeireon" />
        </div>
        <EventCards events={apeireonEvents} />
        {/* {coordArr.length && subCoordArr.length && (
          <CoordSection coordArr={coordArr} subCoordArr={subCoordArr} />
        )} */}
        <Footer />
      </div>
    </>
  );
}

const DeptTitle = ({ deptName, deptCoordName, deptImage }) => {
  return (
    <div className={styles.deptTitle} style={{ justifyContent: 'center' }}>
      {/* <div>
        <h1>{deptName}</h1> */}
      {/* <h4>Coordinator(s): {deptCoordName}</h4> */}
      {/* </div> */}
      <img
        src={deptImage}
        loading="lazy"
        style={{ height: 'auto', width: '70vw', minWidth: '350px' }}
      />
    </div>
  );
};

const DeptDescription = ({ deptDesc }) => {
  return (
    <div className={styles.deptDesc2}>
      {/* <div>
        <DisplayLottie
          animationPath={'https://assets7.lottiefiles.com/packages/lf20_iv4dsx3q.json'}
        />
      </div> */}
      <p>{deptDesc}</p>
    </div>
  );
};

const EventCards = ({ events }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>Events</h2>

      <motion.div className={styles.cardSection}>
        {events?.length > 0 ? (
          events.map((event, index) => (
            //   {event.old === false && (
            <motion.div
              key={event.key}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>
              <ApeireonCard
                key={event.key}
                old={event.old}
                eventName={event.eventName}
                desc={event.desc}
                image={event.image}
                registerLink={event.registerLink}
              />
            </motion.div>
          ))
        ) : (
          <h2 style={{ color: 'gainsboro' }}>No Events</h2>
        )}
      </motion.div>
    </div>
  );
};

const CoordSection = ({ coordArr, subCoordArr }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>Team</h2>

      <motion.div className={styles.cardSectionTeams}>
        {coordArr?.length > 0 ? (
          coordArr.map((member, index) => (
            <motion.div
              key={member.coordName}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}>
              {member.committee !== 'Overall Coordinator' && (
                <CoordCard
                  key={member.coordName}
                  coordName={member.coordName}
                  coordImage={'https://drive.google.com/uc?export=view&id=' + member.coordImage}
                  coordCommittee={member.coordCommittee}
                  coordLinkedIn={member.coordLinkedIn}
                  coordGitHub={member.coordGitHub}
                  coordCFHandle={member.coordCFHandle}
                />
              )}
            </motion.div>
          ))
        ) : (
          <h2 style={{ color: 'gainsboro' }}>No Coordinators</h2>
        )}
      </motion.div>

      <motion.div className={styles.cardSectionTeams}>
        {subCoordArr?.length > 0 ? (
          subCoordArr.map((member, index) => (
            <motion.div
              key={member.coordName}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}>
              <CoordCard
                key={member.coordName}
                coordName={member.coordName}
                coordImage={'https://drive.google.com/uc?export=view&id=' + member.coordImage}
                coordCommittee={member.coordCommittee}
                coordLinkedIn={member.coordLinkedIn}
                coordGitHub={member.coordGitHub}
                coordCFHandle={member.coordCFHandle}
              />
            </motion.div>
          ))
        ) : (
          <h2 style={{ color: 'gainsboro' }}>No Sub Coordinators</h2>
        )}
      </motion.div>
    </div>
  );
};
