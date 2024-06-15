import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
import './Values.css'
const Values = () => {
  return (
   <section className="v-wrapper">
    <div className="inner-width padding flex-center v-container">
        {/* left part */}
        <div className="v-left">
            <div className="image-container">
                <img src="./2ndhome.jpg" alt="image" />
            </div>
        </div>
        {/* right part */}
        <div className="flex-col-start v-right">
            <span className='orange-text'>Our Value</span>
            <span className='primary-text'>Value We Give to You</span>
            <span className='secondary-text'>We are always ready to help by providing the best services for You
                <br/>
                We beleive a good place to live can make your life better
            </span>
            {/* <Accordion className='accordion'
                       allowMultipleExpanded={flase}
                       preExpanded={[0]}>
                        {data.map((item, i) => {
                            return(
                                <AccordionItem className='accordion-item' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <div className="flex-center icon">{item.icon}</div>
                                            <span className='primary-text'>
                                                {item.heading}
                                            </span>
                                            <div className="flex-center icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                </AccordionItem>
                                  )
                                                }
                                  )
                        }
            </Accordion> */}
        </div>
    </div>
   </section>
  )
}

export default Values
