import styles from './ProjectsStyles.module.css';
import design12 from '../../assets/cs/design12.jpeg';
import todo1 from '../../assets/cs/todo1.jpeg'
import brand2 from '../../assets/cs/brand2.jpeg'
import shapapiece from '../../assets/cs/shapapiece.png'
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

     <ProjectCard src={brand2} link=''
      h3='Clouds & Sunsets'
      p='Brand Development'/>

     <ProjectCard src={shapapiece} link='https://shapapiece.co.za'
      h3='Shapapiece'
      p='Ecommerce Website'/>
      </div>
    </section>
  )
}

export default Projects
