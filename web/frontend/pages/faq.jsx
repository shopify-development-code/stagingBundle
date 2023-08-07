import React from 'react';
import { Collapse,Card } from 'antd';
import faqCreateBundle from  "../assets/FAQ_createBundle.png"
import faqSelectBundle from  "../assets/FAQ_selectBundle.png"
import faqSelectProduct from  "../assets/FAQ_selectProduct.png"
import faqSelectNameAndTitle from  "../assets/Faq_selectNameAndTitle.png"
import faqSelectDiscount from  "../assets/FAQ_selectDiscount.png"
import faqSelectDates from  "../assets/FAQ_selectDates.png"
import faqPreviewBundle from  "../assets/FAQ_previewBundle.png"
import faqDisplayOption from  "../assets/FAQ_displayOption.png"
import faqSaveBundle from  "../assets/FAQ_saveBundle.png"
import faqSelectCustomization from  "../assets/FAQ_selectCustomization.png"
import faqEnterCustomization from  "../assets/FAQ_enterCustomizationScreen.png"
import faqSelectCustomizationType from  "../assets/FAQ_selectCustomizationType.png"
import faqCustomizationBox from  "../assets/FAQ_customizationBox.png"
import faqCustomizationBoxRadius from  "../assets/FAQ_customizationBoxRadius.png"
import faqCustomizationTitle from  "../assets/FAQ_customizationTitle.png"
import faqCustomizationProductDetail from  "../assets/FAQ_customizationProductDetail.png"
import faqCustomizationButton from  "../assets/FAQ_customizationButton.png"
import faqCustomizationTotalSection from  "../assets/FAQ_customizationTotalSection.png"
import faqAnalytics from  "../assets/FAQ_analytics.png"
import faqTranslation from  "../assets/FAQ_translation.png"

const Faq = () => {
    
const items = [
    {
      key: '1',
      label: 'How to create a simple bundle ?',
      children:<>
       <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          Crafting a simple bundle with a specific selection of products is incredibly easy! Simply click the "create bundle" button on the Bundles tab, and you'll be instantly directed to the bundle creation menu.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCreateBundle} alt="FAQ_create_Bundle" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          Choose the type of bundle you wish to create
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectBundle} alt="FAQ_Select_Bundle" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          Choose the products you wish to include in the bundle.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectProduct} alt="FAQ_Select_Product" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          Choose a name and title for your bundle.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectNameAndTitle} alt="FAQ_Select_Name_and_Title" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          Decide on the type of discount you'd like to apply to the bundle and specify the discount amount.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectDiscount} alt="FAQ_Select_Discount" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          Specify the start and end time for your bundles. The bundles will only be visible in your shop during this designated time period.
          (Note: Please adjust your time based on the timezone of your's store. For example, if your store is in the New York timezone, and you are currently in Australia, please refer to the New York timezone for setting dates and times. )

          </li>
        </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectDates} alt="FAQ_Select_Date" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          You can get a preview of how your bundle will appear on your shop by checking the "preview" section on the "Create bundle" page, located on the right-hand side.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqPreviewBundle} alt="FAQ_Preview_Bundle" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          Select the locations where you want the bundles to be showcased.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqDisplayOption} alt="FAQ_Display_Option" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>

          Click on the Save button to complete the process.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSaveBundle} alt="FAQ_Display_Option" />
        </div>
      </div>
      </>,
    },
    {
      key: '2',
      label: 'How can I personalize the appearance of my bundles? (Customization)',
      children: <>
      <h1>With Smart bundle, you have the freedom to customize the design and appearance of your bundles according to your preferences.</h1>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
         
To access the customization options on the Smart Bundle admin panel, navigate to the "Customization" section.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectCustomization} alt="FAQ_Customization" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
         In the "Design" section, click on the "Customize" button to begin personalizing your bundle's appearance.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqEnterCustomization} alt="FAQ_Customization" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          On the left side of the page, you can specify the type of bundle you wish to customize. This will allow you to make specific design changes to that particular bundle type.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqSelectCustomizationType} alt="FAQ_Customization" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          In the "Box" section, you can use our color tool to specify your desired colors for the "background" and "border" of your bundle. This way, you can easily customize the appearance to match your preferences.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCustomizationBox} alt="FAQ_Customization" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          By assigning different values to the "Radius," you can choose whether you want the corners of your bundle to be curved or sharp. Adjusting the radius allows you to control the level of corner curvature and customize the overall look of the bundle.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCustomizationBoxRadius} alt="FAQ_Customization" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          You can edit the "Title color," "Size," and "Alignment" of the text. This way, you can easily customize the appearance of the title text to match your preferences.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCustomizationTitle} alt="FAQ_Customization" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
         
Certainly! With the customization options available, you can edit the color, size, and radius of various elements within the bundle, including:

Title,
Price,
Image,
Quantity,
Variant Selector,
Plus Icon.
This level of flexibility allows you to tailor each element's appearance to suit your preferences and maintain a consistent and attractive design for your bundles.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCustomizationProductDetail} alt="FAQ_create_Bundle" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          Clicking on the "Button" element provides you with a wide range of customizable attributes for it. You can customize:
<ul>
  <li>Background color : Choose your preferred background color for the button.</li>
  <li>Text size : Adjust the size of the text displayed on the button.</li>
  <li>Button Position : Determine the position of the button within the bundle.</li>
</ul>
  
These options give you the flexibility to create an appealing and functional button that complements the overall design of your bundles.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCustomizationButton} alt="FAQ_create_Bundle" />
        </div>
      </div>
      <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          In the "Total section" customization, you have the freedom to personalize a wide range of features for elements like the "Background," "Text," "Original price," and "Final price." This allows you to create a unique and visually appealing total section that matches your shop's style and enhances the overall presentation of your bundles.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqCustomizationTotalSection} alt="FAQ_create_Bundle" />
        </div>
      </div>
      </>,
    },
    {
      key: '3',
      label: 'How can I effectively monitor the sales of my bundles?',
      children: <>
       <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          Within the app's admin panel, you'll find an "Analytics" tab that allows you to conveniently access and review all Smart Bundle statistics for your shop. Through this page, you can obtain comprehensive information about the sales of your bundles, including detailed insights into each bundle's performance.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img className='sd-bundle-faq-images' src={faqAnalytics} alt="FAQ_Analytics" />
        </div>
      </div>
      </>,
    },
    {
      key: '4',
      label: 'How can I change the "Add to cart" button translation?',
      children: <>
       <div className='sd-bundle-faq-accordion-box'>
        <ul>
          <li>
          To modify the button translations, access the settings and navigate to the translation tab. From there, you can change the text for the "Add to cart" button according to your preference.
          </li>
          </ul>
        <div className='sd-bundle-faq-parent-img'>
          <img  className='sd-bundle-faq-images' src={faqTranslation} alt="FAQ_translation" />
        </div>
      </div>
      </>,
    }
    
  ];


  return (
    <div className='sd-bundle-setting-translation'>
           <div className='sd-bundle-MoveToHome-section'>
    
       <div className="sd-bundle-commonHeading">FAQ and Instructions</div>
      
    </div>
    <div  >
        <Card>
    <Collapse className='sd-bundle-FAQ-accordion'  ghost items={items} />

        </Card>
    </div>
    </div>
  )
}

export default Faq