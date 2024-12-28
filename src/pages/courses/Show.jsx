import { useParams } from 'react-router-dom'
import courses from "../../assets/js/courses.js";
import AppLayout from "../../layouts/AppLayout.jsx";
import Star from "./partials/filters/Star.jsx";
import PrimaryButton from "../../components/ui/PrimaryButton.jsx";
import cartContext from "../../contexts/CartContext.js";
import { useContext } from "react";

function Show() {
  const context = useContext(cartContext)

  const params = useParams()
  const courseId = params.id
  const courseInfo = courses[courseId]


  return (
    <AppLayout bannerText={courseInfo.name}>
      <section className='content-padding'>
        <div className="container single-course__grid">
          <div className="single-course__image-container"><img
            className="single-course__image"
            src={courseInfo.imageSrc}
            alt=""
          /></div>
          <div className="single-course__info">
            <div>
              Course name: { courseInfo.name }
            </div>
            <div>
              Price: { courseInfo.price }$
            </div>
            <div>
              Language: { courseInfo.language }
            </div>
            <div>
              Skill level: { courseInfo.skillLevel }
            </div>
            <div>
              Instructor: { courseInfo.instructor }
            </div>
            <div className='row'>
              <span>
                Mark: { courseInfo.mark }
              </span>
              <Star />
            </div>
            <div>
              Tag: { courseInfo.tag }
            </div>
            <PrimaryButton
              className='single-course__button'
              onClick={() => context.addItem(courseInfo)}
            >
              Enroll Now
            </PrimaryButton>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}

export default Show