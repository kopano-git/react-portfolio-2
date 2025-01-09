import styles from './SkillsStyles.module.css'
import check from '../../assets/cs/check.png'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.SkillList}>
        <SkillList src={check} skill='HTML'/>
        <SkillList src={check} skill='CSS'/>
        <SkillList src={check} skill='Javascript'/>
        <SkillList src={check} skill='Python'/>
        <SkillList src={check} skill='React'/>
      </div>
      <hr/>

      <div className={styles.SkillList}>
        <SkillList src={check} skill='Angular'/>
        <SkillList src={check} skill='Django'/>
        <SkillList src={check} skill='tailwind'/>
        <SkillList src={check} skill='Express.js'/>
        <SkillList src={check} skill='Node'/>
      </div>
      <hr/>

      <div className={styles.SkillList}>
        <SkillList src={check} skill='Redux'/>
        <SkillList src={check} skill='Git'/>
        <SkillList src={check} skill='Bootstrap'/>
        <SkillList src={check} skill='Rest APIs'/>
        <SkillList src={check} skill='PHP'/>
      </div>
    </section>
  )
}

export default Skills
