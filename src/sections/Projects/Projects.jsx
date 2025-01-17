import styles from './ProjectsStyles.module.css';
import design12 from '../../assets/cs/design12.jpeg';
import todo1 from '../../assets/cs/todo1.jpeg'
import brand2 from '../../assets/cs/brand2.jpeg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.ProjectsContainer}>
        {/* projects */}
      <ProjectCard src={design12} link='https://github.com/kopano-git/CS-WEBSITE'
      h3='Clouds & Sunsets'
      p='React Ecommerce Website'/>

     <ProjectCard src={todo1} link='https://github.com/kopano1/todo_list_app'
      h3='Task Management'
      p='To-do list web/app '/> 

     <ProjectCard src={brand2} link='https://docs.google.com/presentation/d/1HxA9W2XymUutAhtSW-fBj12opVqGU2ACBVKItNbMqP0/edit#slide=id.g275af70a7f6_0_0'
      h3='Clouds & Sunsets'
      p='Brand Development'/>
      </div>
    </section>
  )
}

export default Projects
