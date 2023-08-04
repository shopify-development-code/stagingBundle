
let server = "https://bundle.shinedezigninfotech.com";
// let server = "https://0aad-14-99-195-170.ngrok-free.app"  ;
  let smartNoImg = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHYUlEQVR4nO2da0wUVxTHb/xSk/qxNbXCzsyyvGYWFhF51Qeo0IeAjxRba/1kW9MiVA1FGkGbippabWJsVBDQVjuNbEF5iCBoLWw1ltqaan01NmlD6wdi+sAvTWtOcy67I4/VXXF3587s/Scnk50Pyzn3t+eec2fDWUK4uLi4uLi4zCtBlF2CKPdZrYmT9faFawjIt4KkgCAqlzgUBmSzJT0piPIPCMUiyVctlrgpevsU9uJQGBSHwqA4FAbFoTAoDoVBcSgMikNhUBwKg+JQGBSHwqA4FINAiYpSIi2SvNoiKSfwniDJd+gDS0OafIfGJSntFkkummpLiCAGg/KHIMr/6r+QSrDsriApDaIYLxCWZRGVFYIoo7MgWBXIy38ZNm3aCbX7neBs6IaW5h5DmrOhm8aAsSxesgKstkQKxiIqf0dKSj5hURZRLnZ/ciAufjp1ODV9Lhw+1Kr7grYE2OrrG6Fg4XItW3BrJiwpUpQL0DHRaoeStytB/awdMjJzTA2lpbkHSkoqAGPG2JnJlIgIx1RMXVx8hOFxFqGkZcyjUGyxSRAdn6z3vg/+WOrsZ8F16/ZI+20Aztzsh+4L16Ct/esxUNzb119MfJEniHItOoQpPNzRLR9Vg+LIAHtSBnU4fc5z0HbpxthgDWa9/QPQ0XtxRKz597aval1hYGsrSPJ/WOTq65pGwJiWlg1qz3k4cfUmzJqfTx3OyHreFFBct26PgFJX1whSVCJgZ4k7hm5AsJjhQmPn4XHu8yMdYE/KpDA8zpsRSm//ALQeP6vFvWjRCk+WvKUjEKUdncB20ONY0Tvvwar1G8cEYEYoXReuaXFXbtwxBESU2/QDIio30Ina2i80x3DRPznl8hqA2aCcudmvxY3nFPeh+JpuQARRGUQnnM4uzbFYOQW6f+6/bxBmgtLbP6DFjWswlCHKoH5A3K3i8I4DX/sKxExQWkbFjmY4IKxAOfrdZVi5phRSUjPBGp1AryvXltL7YQdEbyh7m09A0vRU2LklF37qK4Q7vy6n1x1VueBIToW9zR3hB0QvKEcvXKYwzp9cDP/8/uoYO3dyMYVy7Psfww+IHlBWrimlmeENhsc+rMqF19aVhieQUENJSc2k29ODgNzoK4SU9JnhCySUUKKiE2nNeBCQwV9eAVuMI7yBuEIEJSXtGZ8Zcv2bQpiREeYZ4goRFGxtsZt6EJDtm7GGlHEgrhBAwXMGdlHYTXmDcbZzqMtqvniFA3GFKFPwnIGLjt0UFnCsKXjFzBg6h3T6fA/8MisstixXiKDgOQNbW+ymsNDjFbcpfzIDzVvshgdy+Mw5mFnwEkQnptErvg4llEcx02XI/uOnINqRDpPKK2BCXT294mu8bxQopgFS1/kl2BzpMLFqKxBV1eyxbR/Q+9VtXYaAYgog94NBDAbFFFuWLxjEQFAMX9T9hUEMAsXQQGo7Tj8UDGIAKIYFMl4YJIhQsL3OWrgU4hxpkL1oqdd225Q15FFhkCBAwbY6LikdsreVw8LWffSKr721277MUEACBYMEEArWMVz8nD3vw5LTBzXLra6i9729tymABBoGCQCU+8EYLxTDbFnBgkEeAYovGOOBYpiiHkwYZBxQdjUc8wvGw0IxDJCJVduCCoO4Df+OzY9nX6ItAbK3v+sXjIeBYhggoYBB/MiU3Y2tIEUlUJ9iM2dBftPHAYXCgaj+Q/HUjLk7N0DcrDlBgcKBqP5lyugCXtC8NyhQOBDV9/ZlTUiFmIQZYwp4MKBwIKp/NUWwp3jtqAINhQNR/S/0gpcsCTQUDkRlCwoHorIDJWfPZg6EMAaFZ4jKFhQORGULCgeisgWFOSCeoTPD/y1akOwwoaYmIM+pCMNQ8pt201g9cTcc6dSG0OgJ5Dr9/qPWqTlmjZ0Gk9aV6b7wxMdTYpFC2TxuKLM3rQNbfLIW9/4abXDAFd1Ha2wcNlpj3gsvQkTmPN0XnQQZSvzMLMjJW6rFXVnJwmgNSS4aPXym7kATCFY7PF5eYVooWVvLaIy1BxvHDp+xKm/qBgSnc+JIIjqeqf6ec6+vXk8nrZkRStbWMpCi7LBqdbkWL856YWI8E0qQlBpvA8wQCn6KIjLnwqS1ZUwX+ok+oCAM+s1jdCKN6Y2iezCaj30FefnL3PVD2Uf0VmRk7NPaiL+SihFQMKXnLyiEqLhkEBkY3yeM2+ye2YqQPGPOiBmSxSUb3N2V/KcgyE8RFoQDILUhmKOgmMXUUYM9D33aAsXFG7QhmBarfQFhSe7pcnRMLM4gxLF3ZoYSE5c8fExsEWFRFknJw4MROopFDjsPnLSGPfrww6PRzOnsgpqaBtra5uUtG7b9yndxeDRhWVNiYp4QJHmXqUeNiwrGdttQv/OI7R/25BZROY6nV8/0OUOaqAwOxSC3YUwYG/9VCAbFoTAoDoVBcSgMikNhUBwKg+JQGBSHwqA4FAbFoTAoDoVBcSgMikNhUFZr4mRBVC4NPbCU+/T2h4t4oMh9gqj08AXh4uLi4uIi5tX/Fms2vZkCm94AAAAASUVORK5CYII=`;

let productPageClass = document.getElementsByClassName(
  "sd-bundle-app" 
); 

if (sdbundlePageType == "product") {
  
  
  let sdBundleLoader = document.createElement("div")
  sdBundleLoader.id = "sd-bundle-main-container-loader"
  sdBundleLoader.className ="sd-bundle-main-container-loader"
  let Gdiv =document.createElement('div')
  Gdiv.innerText ="G"
  sdBundleLoader.appendChild(Gdiv)
  let Ndiv =document.createElement('div')
  Ndiv.innerText ="N"
  sdBundleLoader.appendChild(Ndiv)
  let Idiv =document.createElement('div')
  Idiv.innerText ="I"
  sdBundleLoader.appendChild(Idiv)
  let Ddiv =document.createElement('div')
  Ddiv.innerText ="D"
  sdBundleLoader.appendChild(Ddiv)
  let Adiv =document.createElement('div')
  Adiv.innerText ="A"
  sdBundleLoader.appendChild(Adiv)
  let Odiv =document.createElement('div')
  Odiv.innerText ="O"
  sdBundleLoader.appendChild(Odiv)
  let Ldiv =document.createElement('div')
  Ldiv.innerText ="L"
  sdBundleLoader.appendChild(Ldiv)

  productPageClass[0].append(sdBundleLoader)


  document.getElementById("sd-bundle-main-container-loader").style.display =
    "block";
  
  getData();
}

async function getData() {

  let shop = Shopify.shop;

  const response = await fetch(`${server}/api/storefront/getBundleData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      shop: shop,
    }),
  });
  data = await response.json();
  if (data.status === 200) {
    if (sdbundlePageType == "product") {
      document.getElementById("sd-bundle-main-container-loader").style.display ="none";
      document.getElementById("sd-bundle-main-container-loader").remove();
      let dataArray = [];
      data.response.map((el) => {
        if (el.type == "productBundle") {
          if (el.bundleDetail.display.productPages == true) {
            let pId = `gid://shopify/Product/${sdBundleProductId}`;
            el.bundleDetail.display.productPagesList.forEach((ele) => {
              if (pId == ele) {
                dataArray.push(el);
              }
            });
          } else {
            dataArray.push(el);
          }
        } else if (el.type == "volumeBundle") {
          if (el.bundleDetail.discountedProductType == "specific_product") {
            if (el.bundleDetail.display.productPages == true) {
              let pId = `gid://shopify/Product/${sdBundleProductId}`;
              el.bundleDetail.display.productPagesList.forEach((ele) => {
                if (pId == ele) {
                  dataArray.push(el);
                }
              });
            } else {
              dataArray.push(el);
            }
          } else if (el.bundleDetail.discountedProductType == "collection") {
            if (el.bundleDetail.display.productPages == true) {
              let cId = [];
              sdBundleCollectionId.map((id) => {
                cId.push(`gid://shopify/Collection/${id}`);
              });
              const matchingItems =
                el.bundleDetail.display.productPagesList.filter((item) =>
                  cId.includes(item)
                );
              // console.log("cId", matchingItems);
              if (matchingItems.length > 0) {
                // console.log("volumeCollection", el);
                // console.log("sdProductJson =>", sdProductJson);
                el.bundleDetail.products = [sdProductJson];
                dataArray.push(el);
              }
            } else {
              el.bundleDetail.products = [sdProductJson];
              dataArray.push(el);
            }
          } else if (el.bundleDetail.discountedProductType == "all_products") {
            el.bundleDetail.products = [sdProductJson];
            dataArray.push(el);
          }
        } else if (el.type == "collectionMixMatch") {
          if (el.bundleDetail.display.productPages == true) {
            let cId = [];
            sdBundleCollectionId.map((id) => {
              cId.push(`gid://shopify/Collection/${id}`);
            });
            const matchingItems =
              el.bundleDetail.display.productPagesList.filter((item) =>
                cId.includes(item)
              );

            if (matchingItems.length > 0) {
              // console.log(matchingItems);
              dataArray.push(el);
            }
          } else {
            dataArray.push(el);
          }
        }

      });
      console.log("ddataAARAY",dataArray)
      createBundle(dataArray);
    
      let bundleId = []
      dataArray.forEach((id)=>{
        bundleId.push(id._id)
      })
      await fetch(`${server}/api/storefront/getBundleViews`,{
        method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      shop: Shopify.shop,
      bundleId:bundleId
    }),
      })
     
    }
  }
}


if (sdbundlePageType == "cart") {
  const localData = JSON.parse(localStorage.getItem("sd_bundle_data"));
    if(localData.discountType == "Fix"){
          fetch(window.Shopify.routes.root + "cart.js", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(response => response.json()).then((response)=>{

        let allIdsMatch = localData.variantsId.every((item) => {
      let matchingItem = response.items.find(
        (i) => i.id === parseInt(item.id) && item.quantity <= i.quantity
      );
      return !!matchingItem;
    });
  if(allIdsMatch == true){
  activateRule(localData)
      if(localData.discountType == "Fix"){
    addDiscountToProduct()
  }
  }else{
    
    deactivateRule(localData)
    let formData = {
      attributes:{"SD_BUNDLE_ID":el._id}
    }
     fetch(window.Shopify.routes.root + "cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
  }
       }).catch((error)=>{
      console.log(error.message)
       })
     
    
    }

}


if (sdbundlePageType == "page") {
  const url = window.location.href;
  const urlSearchParams = new URLSearchParams(url.split("?")[1]);
  const path = url.split("/").pop().split("?")[0];
  const id = urlSearchParams.get("b");
  if (path == "collection-mix-match") {
    fetch(`${server}/api/storefront/getCollectionMixMatchData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shop: Shopify.shop,
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("data", data);
        bundlePageBuilder(data);
      })
      .catch((error) => {
        // // console.log(error.message);
      });
  }
}

const arr = [];
const bundleData = [];
const bundleSum = [];
const gidArray = [];
let volumeBundleArr = [];
let volumeBundleSum = [];
function createBundle(BUNDLE_DATA) {
  // let bundleMainDiv = `<div id="sd-bundle-main-container" class="sd-bundle-main-container"></div>`;
  let bundleMainDiv = document.createElement("div");
  bundleMainDiv.className = "sd-bundle-main-container";
  bundleMainDiv.id = "sd-bundle-main-container"
 
  productPageClass[0].append(bundleMainDiv)

  let mainDiv = document.getElementById("sd-bundle-main-container");
  BUNDLE_DATA.forEach((el, bundleIndex) => {
    bundleData.push([]);
    bundleSum.push([]);
    gidArray.push([]);
  
    if (el.type == "productBundle") {
     console.log("bundledata",el)
      //--------------------------------------------------------------------------Product Bundle----------------------------------------------------------------------------
      let StoreCurrentTime = new Date().toISOString('en-US',{timeZone:el.startdate})
       let checkDate = el.endDate =="" ? true :sdCurrentDateTime <= el.endDate  ;
  
      if (sdCurrentDateTime >= el.startdate && checkDate) {
            let BUNDLE_DIV = document.createElement("div");
      BUNDLE_DIV.className = "sd-bundle-product-container";
      BUNDLE_DIV.classList.add("sd-bundleProduct" + bundleIndex);
      BUNDLE_DIV.style.borderColor = el.customization.bundle.box.borderColor;
      BUNDLE_DIV.style.borderRadius = `${el.customization.bundle.box.borderRadius}px`;
      BUNDLE_DIV.style.background = el.customization.bundle.box.backgroundColor;
      let BUNDLE_TITLE = document.createElement("div");
      BUNDLE_TITLE.style.textAlign = el.customization.bundle.title.alignment;

      let bundleTitleText = document.createElement("h2");
      bundleTitleText.className = "sd-bundle-product-title";
      bundleTitleText.innerText = el.title;
      bundleTitleText.style.color = el.customization.bundle.title.color;
      bundleTitleText.style.fontSize = `${el.customization.bundle.title.fontSize}px`;

      BUNDLE_TITLE.append(bundleTitleText);
      mainDiv.append(BUNDLE_DIV);
      BUNDLE_DIV.append(BUNDLE_TITLE);
      // ds is dataSection
      el.bundleDetail.products.map((ele, index) => {
        bundleData[bundleIndex].push([]);
        bundleSum[bundleIndex].push([]);
        gidArray[bundleIndex].push([]);
        // gidArray[bundleIndex].push([]);
        let BUNDLE_PRODUCT_DIV = document.createElement("div");
        let BUNDLE_DATA_SECTION_DIV = document.createElement("div");
        BUNDLE_DATA_SECTION_DIV.className = "sd-bundle-data-section";
        // ds_img_tp is image title price div
        let DATA_SECTION_IMAGE_TITLE_DIV = document.createElement("div");
        DATA_SECTION_IMAGE_TITLE_DIV.className =
          "sd-bundle-data-section-img-title-box";
        let DATA_SECTION_IMAGE_DIV = document.createElement("div");
        DATA_SECTION_IMAGE_DIV.className = "sd-bundle-data-section-image-box";
        let DATA_SECTION_IMG = document.createElement("img");
        DATA_SECTION_IMG.className = "sd-bundle-data-section-image";
        DATA_SECTION_IMG.style.border = "1px solid"+ el.customization.bundle.productDetails.image.borderColor;
        DATA_SECTION_IMG.style.borderRadius = `${el.customization.bundle.productDetails.image.borderRadius}px`;
        let bundleProductImg =  ele.images[0]?.originalSrc ?? smartNoImg
        DATA_SECTION_IMG.setAttribute("src", bundleProductImg);
        DATA_SECTION_IMAGE_DIV.append(DATA_SECTION_IMG);
        let DATA_SECTION_TITLE_PRICE_DIV = document.createElement("div");
        DATA_SECTION_TITLE_PRICE_DIV.className =
          "sd-bundle-datasection-title-price-box";
        let DATA_SECTION_TITLE = document.createElement("div");
        DATA_SECTION_TITLE.className = "sd-bundle-product-variant-title";
        DATA_SECTION_TITLE.style.color =
          el.customization.bundle.productDetails.title.color;
        DATA_SECTION_TITLE.style.fontSize = `${el.customization.bundle.productDetails.title.fontSize}px`;

        DATA_SECTION_TITLE.innerText = ele.title;
        let DATA_SECTION_PRICE = document.createElement("div");
        DATA_SECTION_PRICE.style.color =
          el.customization.bundle.productDetails.price.color;
        DATA_SECTION_PRICE.style.fontSize = `${el.customization.bundle.productDetails.price.fontSize}px`;
        DATA_SECTION_PRICE.className = "sd-bundle-datasection-price";
        DATA_SECTION_PRICE.id = `sd-bundle-datasection-price${index}${bundleIndex}`;
        var newDataSectionPrice = sdCurrencySymbolCode.replace(
          "{{amount}}",
          ele.variants[0].price
        );
        DATA_SECTION_PRICE.innerText = newDataSectionPrice;
        DATA_SECTION_TITLE_PRICE_DIV.append(
          DATA_SECTION_TITLE,
          DATA_SECTION_PRICE
        );
        DATA_SECTION_IMAGE_TITLE_DIV.append(
          DATA_SECTION_IMAGE_DIV,
          DATA_SECTION_TITLE_PRICE_DIV
        );
        let DATA_SECTION_QUANTITY_DIV = document.createElement("div");
        DATA_SECTION_QUANTITY_DIV.className =
          "sd-bundle-dataSection-quantity-box";
        let DATA_SECTION_QUANTITY = document.createElement("span");
        DATA_SECTION_QUANTITY.className = "sd-bundle.product-variant-quantity";
        DATA_SECTION_QUANTITY.style.color =
          el.customization.bundle.productDetails.quantities.color;
        DATA_SECTION_QUANTITY.style.backgroundColor =
          el.customization.bundle.productDetails.quantities.backgroundColor;
        DATA_SECTION_QUANTITY.innerText = `${ele.minimumOrder}X`;
        DATA_SECTION_QUANTITY_DIV.append(DATA_SECTION_QUANTITY);
        BUNDLE_DATA_SECTION_DIV.append(
          DATA_SECTION_IMAGE_TITLE_DIV,
          DATA_SECTION_QUANTITY_DIV
        );
        BUNDLE_PRODUCT_DIV.append(BUNDLE_DATA_SECTION_DIV);
        let BUNDLE_SELECT;
        let BUNDLE_SELECTION_DIV = document.createElement("div");
        let seeMoreDiv = document.createElement("div");
        seeMoreDiv.className = "sd-bundle-see-more-box";
        let show_more = document.createElement("button");
        seeMoreDiv.append(show_more);
        show_more.innerText = el.translations.translation.seeMore;
        let seeLessDiv = document.createElement("div");
        seeLessDiv.className = "sd-bundle-see-less-box";
        let show_less = document.createElement("button");
        seeLessDiv.append(show_less);
        show_less.innerText = el.translations.translation.seeLess;
        seeLessDiv.classList.add("sd-bundle-hide-click");
        for (let i = 1; i <= ele.minimumOrder; i++) {
          // console.log("ele.minimumOrder", ele.minimumOrder);
          if (ele.minimumOrder <= 2) {
            seeMoreDiv.style.display = "none";
          }
          gidArray[bundleIndex][index][i - 1] = ele.variants[0].id;
          bundleData[bundleIndex][index][i - 1] = {
            id: ele.variants[0].id.replace("gid://shopify/ProductVariant/", ""),
            quantity: 1,
          };
          bundleSum[bundleIndex][index][i - 1] = ele.variants[0].price;
          // // //       console.log(bundleSum
          // , "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
          if (ele.variants.length > 1) {
            let selectRow = document.createElement("div");
            selectRow.className = "sd-bundle-selectRow-div";
            let b_p_index = document.createElement("p");
            b_p_index.innerText = i;
            selectRow.append(b_p_index);
            BUNDLE_SELECT = document.createElement("select");
            BUNDLE_SELECT.style.color =
              el.customization.bundle.productDetails.variantSelector.color;
            BUNDLE_SELECT.style.background =
              el.customization.bundle.productDetails.variantSelector.backgroundColor;

            BUNDLE_SELECT.id = `sd-bundle-select-option${i}${bundleIndex}${index}`;
            BUNDLE_SELECT.className = "sd-bundle-select-option";
            BUNDLE_SELECT.classList.add(
              `sd-bundle-select-option${i}${bundleIndex}${index}`
            );
            // let DISABLE_BUNDLE_OPTION = document.createElement("option")
            // DISABLE_BUNDLE_OPTION.innerText = "Select Variants"

            // BUNDLE_SELECT.append(DISABLE_BUNDLE_OPTION)
            ele.variants.map((elem, optionIndex) => {
              // // // console.log(elem)
              let BUNDLE_OPTION = document.createElement("option");
              BUNDLE_OPTION.textContent = elem.title;
              BUNDLE_OPTION.value = elem.id.replace(
                "gid://shopify/ProductVariant/",
                ""
              );
              BUNDLE_OPTION.setAttribute("optionIndex", optionIndex);
              // BUNDLE_OPTION.value = elem.price
              BUNDLE_OPTION.setAttribute("data-id", elem.price);
              BUNDLE_SELECT.appendChild(BUNDLE_OPTION);

              selectRow.append(BUNDLE_SELECT);
            });
            BUNDLE_SELECTION_DIV.append(selectRow);
            if (i > 2) {
              selectRow.classList.add("sd-bundle-hide-click");
            }
            show_more.addEventListener("click", function (e) {
              // // console.log(e)
              selectRow.classList.remove("sd-bundle-hide-click");
              seeMoreDiv.classList.add("sd-bundle-hide-click");
              seeLessDiv.classList.remove("sd-bundle-hide-click");
            });

            show_less.addEventListener("click", function (e) {
              // // console.log(e)
              if (i > 2) {
                selectRow.classList.add("sd-bundle-hide-click");
              }
              seeLessDiv.classList.add("sd-bundle-hide-click");
              seeMoreDiv.classList.remove("sd-bundle-hide-click");
            });
          }
          BUNDLE_DIV.append(BUNDLE_PRODUCT_DIV);
          BUNDLE_PRODUCT_DIV.append(BUNDLE_SELECTION_DIV);

          let selectedElement = document.getElementsByClassName(
            `sd-bundle-select-option${i}${bundleIndex}${index}`
          );

          selectedElement.forEach((selected) => {
            const selectedOption = selected.options[1];
            const id = selectedOption?.getAttribute("data-id");
            arr.push(id);

            selected.addEventListener("change", (e) => {
              const varientPrice =
                e.target.options[e.target.selectedIndex].dataset.id;
              bundleSum[bundleIndex][index][i - 1] = varientPrice;
              bundleData[bundleIndex][index][i - 1] = {
                id: e.target.value,
                quantity: 1,
              };
              const gitVal = "gid://shopify/ProductVariant/" + e.target.value;
              gidArray[bundleIndex][index][i - 1] = gitVal;
              // // console.log(e.target.value);
              // selected.classList.add("Variant-opened");
              let priceDiv = document.getElementById(
                `sd-bundle-datasection-price${index}${bundleIndex}`
              );
              const selectedOption = selected.options[selected.selectedIndex];
              const id = selectedOption.getAttribute("data-id");
              let newId = sdCurrencySymbolCode.replace("{{amount}}", id);
              priceDiv.innerText = newId;

              arr.splice(i, 0, id);

              const finalSumBundle = bundleSum[bundleIndex].reduce(
                (acc, curr) => acc.concat(curr),
                []
              );
              let myArray = finalSumBundle.map(parseFloat);

              let total = myArray.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              );

              const getDivPrice = document.getElementById(
                `sd-bundle-discount-price${bundleIndex}`
              );
              var newPrice = sdCurrencySymbolCode.replace(
                "{{amount}}",
                total.toFixed(2)
              );
              getDivPrice.innerHTML = newPrice;
              const discountedPriceDiv = document.getElementById(
                `sd-bundle-final-price${bundleIndex}`
              );
              if (el.bundleDetail.discountType == "percent") {
                let part = parseFloat(el.bundleDetail.discountValue);
                let percentage = (total * part) / 100;
                let totalPrice = total - percentage;
                var newPrice = sdCurrencySymbolCode.replace(
                  "{{amount}}",
                  totalPrice.toFixed(2)
                );
                discountedPriceDiv.innerHTML = newPrice;
              } else if (el.bundleDetail.discountType == "fixed") {
                let part = parseFloat(el.bundleDetail.discountValue);
                let fixed = total - part;
                var newPrice = sdCurrencySymbolCode.replace(
                  "{{amount}}",
                  fixed.toFixed(2)
                );
                discountedPriceDiv.innerHTML = newPrice;
              }
            });

            selected.addEventListener("blur", function () {
              // selected.classList.remove("Variant-opened");
            });
          });
        }
        BUNDLE_SELECTION_DIV.append(seeMoreDiv);
        BUNDLE_SELECTION_DIV.append(seeLessDiv);
        
        if (index < el.bundleDetail.products.length - 1) {
          let BUNDLE_PLUS_BTN_DIV = document.createElement("div");
          BUNDLE_PLUS_BTN_DIV.className = "sd-bundle-plusBtn-box";
          BUNDLE_PLUS_BTN_DIV.style.background =  el.customization.bundle.productDetails.plusBackgroundColor
          let BUNDLE_PLUS_SPAN_SVG = document.createElement("span");
          BUNDLE_PLUS_SPAN_SVG.className = "sd-bundle-plus";
          BUNDLE_PLUS_SPAN_SVG.innerHTML = `<svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg>`;
          BUNDLE_PLUS_SPAN_SVG.style.color =  el.customization.bundle.productDetails.plusColor
          BUNDLE_PLUS_BTN_DIV.append(BUNDLE_PLUS_SPAN_SVG);
          BUNDLE_PRODUCT_DIV.append(BUNDLE_PLUS_BTN_DIV);
        } else {
          // // console.log("ENTER IN ELSE CONDITION");
        }
      });

      let finalSumBundle = bundleSum[bundleIndex].reduce(
        (acc, curr) => acc.concat(curr),
        []
      );
      let myArray = finalSumBundle.map(parseFloat);
      let total = myArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      let discountedPrice;
      if (el.bundleDetail.discountType == "percent") {
        // // // console.log(el.bundleDetail.discountValue)
        let part = parseFloat(el.bundleDetail.discountValue);
        // // console.log(part);
        let percentage = (total * part) / 100;
        result = total - percentage;
        discountedPrice = result.toFixed(2);
      } else if (el.bundleDetail.discountType == "fixed") {
        let part = parseFloat(el.bundleDetail.discountValue);
        let fixed = total - part;
        discountedPrice = fixed.toFixed(2);
      } else if (el.bundleDetail.discountType == "price") {
        let part = parseFloat(el.bundleDetail.discountValue);
        discountedPrice = part;
      } else if (el.bundleDetail.discountType == "noDiscount") {
      }

      if (
        el.bundleDetail.discountType == "freeShipping" ||
        el.bundleDetail.discountType == "noDiscount"
      ) {
        // no changes
      } else {
        let discountAppliedText = document.createElement("div");

        discountAppliedText.innerText = "Discount will be applied at checkout";
        discountAppliedText.className = "sd-bundle-discount-applied-text";
        BUNDLE_DIV.append(discountAppliedText);
      }

      if (el.bundleDetail.discountType == "freeShipping") {
        let noShippingDiv = document.createElement("div");
        noShippingDiv.className = "sd-bundle-no-shopping-container";
        BUNDLE_DIV.append(noShippingDiv);
        let shippingIcon = document.createElement("span");
        shippingIcon.className = "sd-bundle-shipping-icon";
        shippingIcon.innerHTML = `<svg viewBox="0 0 1024 1024" focusable="false" data-icon="shopping-cart" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path></svg>`;
        noShippingDiv.append(shippingIcon);
        let noShippingText = document.createElement("span");
        noShippingText.className = "sd-bundle-noShipping-text";
        noShippingText.innerText = el.translations.translation.FreeShipping;
        noShippingDiv.append(noShippingText);
      }
      let TOTAL_DIV = document.createElement("div");
      TOTAL_DIV.className = "sd-bundle-total-conatiner";
      TOTAL_DIV.style.backgroundColor =
        el.customization.bundle.totalSection.backgroundColor;
      TOTAL_DIV.style.color = el.customization.bundle.totalSection.color;
      TOTAL_DIV.style.fontSize =
        el.customization.bundle.totalSection.fontSize + "px";
      let total_text = document.createElement("div");
      total_text.className = "sd-bundle-totalText-box";
      total_text.innerText = el.translations.translation.total;
      TOTAL_DIV.append(total_text);
      let discountedPriceDiv = document.createElement("div");
      discountedPriceDiv.className = "sd-bundle-discounted-price-box";

      let discountPrice = document.createElement("div");
      discountPrice.className = "sd-bundle-discount-price";
      discountPrice.id = `sd-bundle-discount-price${bundleIndex}`;
      discountPrice.style.color =
        el.customization.bundle.totalSection.originalPrice.color;
      discountPrice.style.fontSize =
        el.customization.bundle.totalSection.originalPrice.fontSize + "px";
      let newDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        total.toFixed(2)
      );
      discountPrice.innerText = newDiscountPrice;
      discountedPriceDiv.append(discountPrice);
      if (
        el.bundleDetail.discountType == "freeShipping" ||
        el.bundleDetail.discountType == "noDiscount"
      ) {
        let finalPrice = document.createElement("div");
        finalPrice.className = "sd-bundle-final-price";
        finalPrice.id = "sd-bundle-final-price" + bundleIndex;
        finalPrice.style.color =
          el.customization.bundle.totalSection.finalPrice.color;
        finalPrice.style.fontSize =
          el.customization.bundle.totalSection.finalPrice.fontSize + "px";

        let newfinalPricePrice = sdCurrencySymbolCode.replace(
          "{{amount}}",
          total.toFixed(2)
        );

        finalPrice.innerText = newfinalPricePrice;
        discountedPriceDiv.append(finalPrice);
      } else {
        let finalPrice = document.createElement("div");
        finalPrice.className = "sd-bundle-final-price";
        finalPrice.id = "sd-bundle-final-price" + bundleIndex;
        finalPrice.style.color =
          el.customization.bundle.totalSection.finalPrice.color;
        finalPrice.style.fontSize =
          el.customization.bundle.totalSection.finalPrice.fontSize + "px";

        let newfinalPricePrice = sdCurrencySymbolCode.replace(
          "{{amount}}",
          discountedPrice
        );

        finalPrice.innerText = newfinalPricePrice;
        discountedPriceDiv.append(finalPrice);
      }
      TOTAL_DIV.append(discountedPriceDiv);
      BUNDLE_DIV.append(TOTAL_DIV);
      let ADD_TO_CART_BTN_DIV = document.createElement("div");
      ADD_TO_CART_BTN_DIV.className = "sd-bundle-add-to-cart-box";
      let ADD_TO_CART_BUTTON = document.createElement("button");
      ADD_TO_CART_BUTTON.style.background =
        el.customization.bundle.button.backgroundColor;
      ADD_TO_CART_BUTTON.style.color = el.customization.bundle.button.color;
      ADD_TO_CART_BUTTON.style.fontSize = `${el.customization.bundle.button.fontSize}px`;
      ADD_TO_CART_BUTTON.className = "sd-bundle-add-to-cart-button";
      ADD_TO_CART_BUTTON.innerText =
        el.translations.translation.addToCartButton;
      // sd-bundle-volume-addtocart-btn

      ADD_TO_CART_BTN_DIV.append(ADD_TO_CART_BUTTON);
      ADD_TO_CART_BUTTON.addEventListener("click", (e) => {
        // // console.log("bundle----add to cart", el);
        ADD_TO_CART_BUTTON.innerText = "";
        let btnSpinner = document.createElement("div");
        btnSpinner.className = "bundleBtnSpinner";
        ADD_TO_CART_BUTTON.append(btnSpinner);

        btnSpinner.style.display = "block";
        const mergedArray = bundleData[bundleIndex].reduce(
          (acc, curr) => acc.concat(curr),
          []
        );
        const mergedGidArray = gidArray[bundleIndex].reduce(
          (acc, curr) => acc.concat(curr),
          []
        );
        // // console.log("mergedGidArray", mergedGidArray);
        let mergedResult = {};
        for (let item of mergedArray) {
          if (mergedResult[item.id]) {
            mergedResult[item.id].quantity += item.quantity;
          } else {
            mergedResult[item.id] = { ...item };
          }
        }
        let mergedArrayResult = Object.values(mergedResult);

        // // console.log(mergedArrayResult);
        let formData = {
          items: mergedArrayResult,
          attributes:{"SD_BUNDLE_ID":el._id}
        };
        fetch(window.Shopify.routes.root + "cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            // // console.log("POST CART/ADD.JS=>",response);
            let errorDiv = document.getElementsByClassName(
              "sd-bundle-error-message"
            );
            errorDiv[0]?.remove();
            if (response.status == 422 || response.status == 404) {
              ADD_TO_CART_BUTTON.innerText =
                el.translations.translation.addToCartButton;
              btnSpinner.remove();
              let errorMessage = document.createElement("div");
              errorMessage.className = "sd-bundle-error-message";
              BUNDLE_DIV.append(errorMessage);
              // // console.log(response.description);
              errorMessage.innerText = response.description;
            } else {
              // // console.log(el);
              // // console.log(response);

              fetch(window.Shopify.routes.root + "cart.js", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => {
                  return response.json();
                })
                .then((response) => {
                  console.log("GET CART.JS", response)
                  // console.log(response.attributes)
            

               if( el.bundleDetail.discountType == "noDiscount"){
                 console.log("no discount")
                   fetch(`${server}/api/storefront/getBundleClick`,{
                        method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      shop: Shopify.shop,
                      bundleId:el._id
                    }),
                      })
                  let isDiscount =  el.bundleDetail.discountType == "noDiscount" ? "noDiscount" : "Fix"
                  
                  let sd_bundle_data = {
                          discount_name: el.name,
                          code: el.settings.discountLabel,
                          bundleId : el._id,
                           discountType: isDiscount,
                          variantsId: mergedArrayResult,
                          discountCreateId: "",
                        };
                        var jsonString = JSON.stringify(sd_bundle_data);
                        localStorage.setItem("sd_bundle_data", jsonString);
                     
                 
                  btnSpinner.remove();
                 window.location.assign(`https://${Shopify.shop}/cart`);
               }else{
              let finalSumBundle = bundleSum[bundleIndex].reduce(
                 (acc, curr) => acc.concat(curr),
                 []
               );
               let myArray = finalSumBundle.map(parseFloat);
               console.log("myarray",myArray)
               let total = myArray.reduce(
                 (accumulator, currentValue) => accumulator + currentValue,
                 0
               );
               
                  let totalPrice = Number(total.toFixed(2));
                  let finalPrice;
                  switch (el.bundleDetail.discountType) {
                    case "percent":
                      let percentagepart = parseFloat(
                        el.bundleDetail.discountValue
                      );
                      let percentage = (totalPrice * percentagepart) / 100;
                      // result = total - percentage;
                      finalPrice = percentage.toFixed(2);
                      break;
                    case "price":
                      let pricePart = parseFloat(el.bundleDetail.discountValue);
                      result = totalPrice - pricePart;
                      finalPrice = result.toFixed(2);
                      break;
                    case "fixed":
                      let fixedPart = parseFloat(el.bundleDetail.discountValue);
                      finalPrice = fixedPart.toFixed(2);
                      break;
                    default:
                      // // console.log("how are you ?");
                      break;
                  }
                  // console.log(response);
                 
                  console.log("total price", total.toFixed(2));
                  console.log("final price",finalPrice);
                 
                  
                  let isDiscount =  el.bundleDetail.discountType == "noDiscount" ? "noDiscount" : "Fix"
                  console.log("add to cart",el.bundleDetail.discountType)
                  let sd_bundle_data = {
                    discount_name: el.name,
                    code: el.settings.discountLabel,
                    discountType: isDiscount,
                    discountValue: finalPrice,
                    variantsId: mergedGidArray,
                    startDate: el.startdate,
                    endDate: el.endDate,
                    shop: Shopify.shop,
                    bundleType: el.bundleDetail.discountType,
                    totalPrice: total.toFixed(2),
                  };

                  fetch(server + "/api/storefront/createRule", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sd_bundle_data),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log("CREATE RULE",data)
                      
                      if (data.status == 200) {
                        console.log(el)
                      fetch(`${server}/api/storefront/getBundleClick`,{
                        method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      shop: Shopify.shop,
                      bundleId:el._id
                    }),
                      })
                                        // console.log(response);
                        ADD_TO_CART_BUTTON.innerText =
                          el.translations.translation.addToCartButton;
                        btnSpinner.remove();

                       
                        let sd_bundle_data = {
                          discount_name: el.name,
                          code: el.settings.discountLabel,
                          bundleId : el._id,
                           discountType: isDiscount,
                          variantsId: mergedArrayResult,
                          discountCreateId: data.response,
                        };
                        var jsonString = JSON.stringify(sd_bundle_data);
                        localStorage.setItem("sd_bundle_data", jsonString);

                        window.location.assign(`https://${Shopify.shop}/cart`);
                      }
                    });
               }
       
                  // .catch((err) => console.error(err));
                })
                .catch((error) => {
                  ADD_TO_CART_BUTTON.innerText =
                    el.translations.translation.addToCartButton;

                  // // console.log(error);
                });
            }
          })
          .catch((error) => {
            // console.error("Error:", error);
          });
      });
      if (el.customization.bundle.button.position == "bottom") {
        BUNDLE_DIV.append(ADD_TO_CART_BTN_DIV);
      } else {
        BUNDLE_DIV.prepend(ADD_TO_CART_BTN_DIV);
      }
     
          waterMark(BUNDLE_DIV)
        
      }else{
        console.log("no date")
      }
    
       
    //   }else{
    //     console.log("expire ",el)
        
    //   }
      // sdCurrentDateTime >= el.startdate && (el.endDate =="" ? true :sdCurrentDateTime >= el.endDate )) ? console.log("el",el) :console.log("expire",el)
        // console.log("activebundle",el)
    

 
    } else if (el.type == "volumeBundle") {
      //--------------------------------------------------------------------------Volume Bundle----------------------------------------------------------------------------
      console.log(el)
       let StoreCurrentTime = new Date().toISOString('en-US',{timeZone:el.startdate})
      console.log("startdate",StoreCurrentTime)
       let checkDate = el.endDate =="" ? true :sdCurrentDateTime <= el.endDate  ;
       console.log("checckdate",checkDate)
  
      if (sdCurrentDateTime >= el.startdate && checkDate) {
          let optionIndex ;
      let discountedPrice;
      // // console.log("VOLUME BUNDLE DATA ====> ", el);
      let VOLUME_DIV = document.createElement("div");
      VOLUME_DIV.className = "sd-bundle-volume-container";
      VOLUME_DIV.classList.add("sd-volumeBundle" + bundleIndex);
      VOLUME_DIV.style.background = el.customization.volume.box.backgroundColor;
      VOLUME_DIV.style.borderRadius = `${el.customization.volume.box.borderRadius}px`;
      VOLUME_DIV.style.borderColor = el.customization.volume.box.borderColor;
      let VOLUME_TITLE_DIV = document.createElement("div");
      VOLUME_TITLE_DIV.className = "sd-bundle-volume-title";
      VOLUME_TITLE_DIV.style.textAlign =
        el.customization.volume.title.alignment;
      let volumeTitleText = document.createElement("h2");
      volumeTitleText.style.color = el.customization.volume.title.color;
      volumeTitleText.style.fontSize = `${el.customization.volume.title.fontSize}px`;
      volumeTitleText.className = "sd-bundle-volume-title-text";
      volumeTitleText.innerText = el.title;
      VOLUME_TITLE_DIV.append(volumeTitleText);
      VOLUME_DIV.append(VOLUME_TITLE_DIV);

      el.bundleDetail.discountOptions.forEach((ele, volumeIndex) => {
        console.log("ele ==<>", volumeIndex)
      
        let DISCOUNTOPTIONS = document.createElement("div");
        DISCOUNTOPTIONS.className = "sd-bundle-volume-discountOption";
        VOLUME_DIV.append(DISCOUNTOPTIONS);

        mainDiv.append(VOLUME_DIV);

        el.bundleDetail.products.map((elem, index) => {
        

          // volumeBundleArr[bundleIndex].push([]);
          // volumeBundleSum[bundleIndex].push([]);
          // // console.log(">>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<", volumeBundleArr.length)
          // //  console.log(">>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<", volumeBundleSum.length)
          let DISCOUNT_OPT_HEADLINE = document.createElement("div");
          DISCOUNT_OPT_HEADLINE.className =
            "sd-bundle-volume-discountOption-headline";
          let DISCOUNT_OPT_titleDiv = document.createElement("div");
          DISCOUNT_OPT_titleDiv.className =
            "sd-bundle-volume-discountOpt-title-box";
          DISCOUNT_OPT_titleDiv.id = `sd-bundle-volume-discountOpt-title-box${volumeIndex}${index}`;

          let radioBtn = document.createElement("input");
          radioBtn.className = "sd-bundle-volume-radio";
          radioBtn.classList.add("sd-radio-btn" + bundleIndex);
          radioBtn.setAttribute("type", "radio");
          radioBtn.setAttribute("name", "bundle-radio" + bundleIndex);
          radioBtn.setAttribute(
            "id",
            "volumeDiscount" + volumeIndex + bundleIndex
          );
          if (volumeIndex === 0) {
            radioBtn.setAttribute("checked", "checked");
            optionIndex = volumeIndex
          }

          DISCOUNT_OPT_titleDiv.append(radioBtn);

          let discountOptTitle = document.createElement("label");
          discountOptTitle.style.color = el.customization.volume.options.color;
          discountOptTitle.style.fontSize = `${el.customization.volume.options.fontSize}px`;
          discountOptTitle.setAttribute(
            "for",
            "volumeDiscount" + volumeIndex + bundleIndex
          );
          discountOptTitle.className = "sd-bundle-volume-discription-title";
          // let newDescription = ele.description.replace("{discount}",ele.value + ele.type == "percent" ? "%" : ele.type == "price" ? el.translations.translation.off : ele.type == "fixed" ?  el.translations.translation.off :"")
          // console.log("=============>",ele.description.search("{discount}"))
          if(ele.description.includes("{discount}")){
               
            if(ele.type == "percent"){
            let updatedString = ele.description.replace("{discount}", ele.value + "%");
               discountOptTitle.innerText = updatedString
            }else if(ele.type == "price" || ele.type == "fixed"){
              let newPrice = sdCurrencySymbolCode.replace(
              "{{amount}}",
              ele.value
            );
               let updatedString = ele.description.replace("{discount}",newPrice +  el.translations.translation.off );
              discountOptTitle.innerText = updatedString ;
            }else if(ele.type == "noDiscount" || ele.type == "freeShipping"){
                     discountOptTitle.innerText = ele.description
            }
             
          }else{
          discountOptTitle.innerText = ele.description   ;
            
          }

          DISCOUNT_OPT_titleDiv.append(discountOptTitle);

          let DISCOUNT_OPT_BadgeSection = document.createElement("div");
          DISCOUNT_OPT_BadgeSection.style.color =
            el.customization.volume.options.saveDiscount.color;
          DISCOUNT_OPT_BadgeSection.style.fontSize = `${el.customization.volume.options.saveDiscount.color}px`;
          DISCOUNT_OPT_BadgeSection.style.background =
            el.customization.volume.options.saveDiscount.backgroundColor;
          DISCOUNT_OPT_BadgeSection.style.borderRadius = `${el.customization.volume.options.saveDiscount.borderRadius}px`;
          DISCOUNT_OPT_BadgeSection.style.fontSize = `${el.customization.volume.options.saveDiscount.fontSize}px`;
          DISCOUNT_OPT_BadgeSection.className =
            "sd-bundle-volume-discountOption-badgeSection";
          if (ele.type == "percent") {
            DISCOUNT_OPT_BadgeSection.innerText =
              el.translations.translation.save + " " + ele.value + "%";
          } else if (ele.type == "price") {
            let newPrice = sdCurrencySymbolCode.replace(
              "{{amount}}",
              ele.value
            );

            DISCOUNT_OPT_BadgeSection.innerText =
              el.translations.translation.save + " " + newPrice + el.translations.translation.off;
          } else if (ele.type == "fixed") {
            let newPrice = sdCurrencySymbolCode.replace(
              "{{amount}}",
              ele.value
            );
            DISCOUNT_OPT_BadgeSection.innerText =
              el.translations.translation.save + " " + newPrice + el.translations.translation.off;
          }

          DISCOUNT_OPT_HEADLINE.append(
            DISCOUNT_OPT_titleDiv,
            DISCOUNT_OPT_BadgeSection
          );
          DISCOUNTOPTIONS.append(DISCOUNT_OPT_HEADLINE);
          VOLUME_DIV.append(DISCOUNTOPTIONS);
          let DISCOUNT_OPT_PRODUCT_DATA = document.createElement("div");
          if (volumeIndex === 0) {
            DISCOUNT_OPT_PRODUCT_DATA.className =
              "sd-bundle-volume-productdata-container ";
          } else {
            DISCOUNT_OPT_PRODUCT_DATA.className =
              "sd-bundle-volume-productdata-container close";
          }
          DISCOUNT_OPT_PRODUCT_DATA.id = `sd-bundle-volume-productdata-container${index}${volumeIndex}`;
          let DISCOUNT_OPT_PRODUCT = document.createElement("div");
          DISCOUNT_OPT_PRODUCT.className =
            "sd-bundle-volume-discountOption-product";
          let discountOptImgTitlediv = document.createElement("div");
          discountOptImgTitlediv.className =
            "sd-bundle-volume-discountOption-imgTitle-box";
          let productImgDiv = document.createElement("div");
          productImgDiv.className = "sd-bundle-volume-productOption-img-box";
          let productImg = document.createElement("img");
          productImg.className = "sd-volume-img";
          productImg.style.borderColor =
            el.customization.volume.productDetails.image.borderColor;
          productImg.style.borderRadius = `${el.customization.volume.productDetails.image.borderRadius}px`;
          if (
            el.bundleDetail.discountedProductType == "collection" ||
            el.bundleDetail.discountedProductType == "all_products"
          ) {
            productImg.setAttribute(
              "src",
              el.bundleDetail.products[0].images[0]
            );
          } else {
            productImg.setAttribute(
              "src",
              el.bundleDetail.products[0].images[0].originalSrc
            );
          }
          productImgDiv.append(productImg);
          let productTitlePriceDiv = document.createElement("div");
          productTitlePriceDiv.className =
            "sd-bundle-volume-productOption-titlePrice";
          let productTitle = document.createElement("div");
          productTitle.className = "sd-bundle-volume-productOption-title";
          productTitle.style.color =
            el.customization.volume.productDetails.title.color;
          productTitle.style.fontSize = `${el.customization.volume.productDetails.title.fontSize}px`;
          productTitle.innerText = el.bundleDetail.products[0].title;
          let productPrice = document.createElement("div");
          productPrice.className = "sd-bundle-productOption-productPrice";
          productPrice.classList.add("productPrice"+bundleIndex+volumeIndex)
          // console.log("newPriceProduct", el);
          let xprice;
          if (el.bundleDetail.discountedProductType == "all_products") {
            xprice = (
              el.bundleDetail.products[0].variants[0].price / 100
            ).toFixed(2)
          } else {
            xprice = el.bundleDetail.products[0].variants[0].price;
          }
          let newProductPrice = sdCurrencySymbolCode.replace(
            "{{amount}}",
            xprice
          );

          productPrice.innerText = newProductPrice;
          
          
          productPrice.id = `sd-volume-datasection-price${index}${bundleIndex}${volumeIndex}`;
          productPrice.style.color =
            el.customization.volume.productDetails.price.color;
          productPrice.style.fontSize = `${el.customization.volume.productDetails.price.fontSize}px`;
          productTitlePriceDiv.append(productTitle, productPrice);

          discountOptImgTitlediv.append(productImgDiv, productTitlePriceDiv);
          let discountOptionQuantityBox = document.createElement("div");
          discountOptionQuantityBox.className = "sd-volume-quantity-container";
          let discountOptionQuantity = document.createElement("span");
          discountOptionQuantity.className =
            "sd-bundle-volume-discountOption-quantity-box";
          discountOptionQuantity.style.color =
            el.customization.volume.productDetails.quantities.color;
          discountOptionQuantity.style.backgroundColor =
            el.customization.volume.productDetails.quantities.backgroundColor;
          discountOptionQuantity.innerText = `${ele.quantity}X`;
          discountOptionQuantityBox.append(discountOptionQuantity);
          DISCOUNT_OPT_PRODUCT.append(
            discountOptImgTitlediv,
            discountOptionQuantityBox
          );
          DISCOUNT_OPT_PRODUCT_DATA.append(DISCOUNT_OPT_PRODUCT);
          DISCOUNTOPTIONS.append(DISCOUNT_OPT_PRODUCT_DATA);

          let VOLUME_SELECT;

          let VOLUME_SELECTION_DIV = document.createElement("div");
          let seeMoreDiv = document.createElement("div");
          seeMoreDiv.className = "sd-bundle-see-more-box";
          let show_more = document.createElement("button");
          seeMoreDiv.append(show_more);
          show_more.innerText = el.translations.translation.seeMore;
          let seeLessDiv = document.createElement("div");
          seeLessDiv.className = "sd-bundle-see-less-box";

          let show_less = document.createElement("button");
          seeLessDiv.append(show_less);
          show_less.innerText = el.translations.translation.seeLess;
          seeLessDiv.classList.add("sd-volume-hide-click");
          if (ele.quantity <= 2) {
            seeMoreDiv.style.display = "none";
          }
          for (let i = 1; i <= ele.quantity; i++) {
            // // console.log("ENTER IN FOR INITIAL VALUE SET ==>")
            // const initialValset = document.getElementById(`sd-bundle-volume-discounted-price${bundleIndex}`)
            // bundleSum[bundleIndex].push(id.options[0].getAttribute("data-id"));
            let selectRow = document.createElement("div");
            selectRow.className = "sd-volume-selectRow-div";
            let b_p_index = document.createElement("p");
            b_p_index.innerText = i;
            selectRow.append(b_p_index);
            VOLUME_SELECT = document.createElement("select");
            VOLUME_SELECT.style.color =
              el.customization.volume.productDetails.variantSelector.color;
            VOLUME_SELECT.style.background =
              el.customization.volume.productDetails.variantSelector.backgroundColor;

            VOLUME_SELECT.id = `sd-volume-select-option${i}${volumeIndex}`;
            VOLUME_SELECT.className = "sd-volume-select-option";
            VOLUME_SELECT.classList.add(
              "volumeDiscount" + volumeIndex + bundleIndex
            );
       
            VOLUME_SELECT.addEventListener("change", (e) => {
              console.log("volume select")
             
              bundleData[bundleIndex][i - 1] = {
                id: e.target.value,
                quantity: 1,
              };
              const gitVal = "gid://shopify/ProductVariant/" + e.target.value;
              gidArray[bundleIndex][i - 1] = gitVal;
              // console.log("ONSELECT FIRST =>", i);
              // console.log("ENTER IN CLICK", bundleData);

              // volumeBundleArr[volumeIndex][index][i - 1] = { id: e.target.value, quantity: 1 };
              const varientPrice =
                e.target.options[e.target.selectedIndex].dataset.id;
              const displayPrice = document.getElementById(
                `sd-volume-datasection-price${index}${bundleIndex}${volumeIndex}`
              );
              // console.log(displayPrice);
              // console.log("varientPrice",varientPrice)
              
              let xPrice;
              // console.log("klkalkalk", el);
              if (el.bundleDetail.discountedProductType == "all_products") {
                // console.log("allpr");
                xPrice = (varientPrice / 100).toFixed(2);
              } else {
                xPrice = varientPrice;
              }
              // console.log("xprice", xPrice);
              let newdisplayPrice = sdCurrencySymbolCode.replace(
                "{{amount}}",
                xPrice
              );
              // console.log(newdisplayPrice);

              displayPrice.innerText = newdisplayPrice;
              bundleSum[bundleIndex][i - 1] = varientPrice;
              // console.log("ENTER IN CLICK1 bundleSum ", bundleSum);
              // volumeBundleSum[volumeIndex][index][i - 1] = varientPrice;
              const textAmount = document.getElementById(
                `sd-bundle-volume-discounted-price${bundleIndex}`
              );
              // console.log("textAmount", el);
              let myArray = bundleSum[bundleIndex].map(parseFloat);
              let tAmount = myArray.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              );
              let tPrice;
              if (el.bundleDetail.discountedProductType == "all_products") {
                tPrice = (tAmount / 100).toFixed(2);
              } else {
                tPrice = tAmount;
              }
              var newTextAmt = sdCurrencySymbolCode.replace(
                "{{amount}}",
                tPrice
              );
              // console.log("newTextAmt", newTextAmt);
              textAmount.innerHTML = newTextAmt;
                 
                console.log(volumeIndex)
              let total = myArray.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              );
            
               let dTotalprice;
          if (el.bundleDetail.discountedProductType == "all_products") {
            dTotalprice = (
              total / 100
            );
          } else {
            dTotalprice = total
          }
            
                  
              
                if ( el.bundleDetail.discountOptions[volumeIndex].type == "percent") {
                  let part = parseFloat(el.bundleDetail.discountOptions[volumeIndex].value);
                  // // console.log(part);
                  let percentage = (dTotalprice * part) / 100;
                  result = dTotalprice - percentage;
                  discountedPrice = result.toFixed(2);
                } else if (el.bundleDetail.discountOptions[volumeIndex].type == "fixed") {
                  let part = parseFloat(el.bundleDetail.discountOptions[volumeIndex].value);
                  let fixed = dTotalprice - part;
                  discountedPrice = fixed.toFixed(2);
                } else if (el.bundleDetail.discountOptions[volumeIndex].type == "price") {
                  let part = parseFloat(el.bundleDetail.discountOptions[volumeIndex].value);
                  discountedPrice = part;
                } 
        
      
          let newProductPrice = sdCurrencySymbolCode.replace(
            "{{amount}}",
           discountedPrice
          );

              // console.log("discounted", discountedPrice);
        if(el.bundleDetail.discountOptions[optionIndex].type == "noDiscount" || el.bundleDetail.discountOptions[optionIndex].type == "freeShipping"){
    
           document.getElementById(
                "sd-bundle-volume-discount-final-price" + bundleIndex
              ).innerText = newTextAmt
      }else{
      document.getElementById(
                "sd-bundle-volume-discount-final-price" + bundleIndex
              ).innerText = newProductPrice
      }
           

             
            });
            elem.variants.map((element) => {
              // // // console.log(element.price)
              let VOLUME_OPTION = document.createElement("option");
              VOLUME_OPTION.textContent = element.title;

              if (
                el.bundleDetail.discountedProductType == "collection" ||
                el.bundleDetail.discountedProductType == "all_products"
              ) {
                VOLUME_OPTION.value = element.id;
              } else {
                VOLUME_OPTION.value = element.id.replace(
                  "gid://shopify/ProductVariant/",
                  ""
                );
              }

              VOLUME_OPTION.setAttribute("data-id", element.price);
              VOLUME_SELECT.appendChild(VOLUME_OPTION);
              selectRow.append(VOLUME_SELECT);
            });

            VOLUME_SELECTION_DIV.append(selectRow);
            if (i > 2) {
              selectRow.classList.add("sd-volume-hide-click");
            }
            show_more.addEventListener("click", function (e) {
              // // console.log(e)
              selectRow.classList.remove("sd-volume-hide-click");
              seeMoreDiv.classList.add("sd-volume-hide-click");
              seeLessDiv.classList.remove("sd-volume-hide-click");
            });

            show_less.addEventListener("click", function (e) {
              // // console.log(e)
              if (i > 2) {
                selectRow.classList.add("sd-volume-hide-click");
              }
              seeLessDiv.classList.add("sd-volume-hide-click");
              seeMoreDiv.classList.remove("sd-volume-hide-click");
            });
            DISCOUNT_OPT_PRODUCT_DATA.append(VOLUME_SELECTION_DIV);
            // DISCOUNTOPTIONS.append(VOLUME_SELECTION_DIV)
          }
          VOLUME_SELECTION_DIV.append(seeMoreDiv);
          VOLUME_SELECTION_DIV.append(seeLessDiv);
          let selectedElement = document.getElementsByClassName(
            "sd-volume-select-option"
          );
          selectedElement.forEach((selected, ind) => {
            selected.addEventListener("change", (e) => {
              // // console.log(index, volumeIndex);
              let priceDiv = document.getElementById(
                `sd-volume-datasection-price${index}${bundleIndex}${volumeIndex}`
              );
              const selectedOption = selected.options[selected.selectedIndex];
              const id = selectedOption.getAttribute("data-id");
              let xprice;
              if (el.bundleDetail.discountedProductType == "all_products") {
                xprice = (id / 100).toFixed(2);
              } else {
                xprice = id;
              }
              var newId = sdCurrencySymbolCode.replace("{{amount}}", xprice);

              priceDiv.innerText = newId;
            });
          });
            let radioGroup = document.getElementsByName(
          "bundle-radio" + bundleIndex
        );

          
        });

        let radioGroup = document.getElementsByName(
          "bundle-radio" + bundleIndex
        );

        radioGroup.forEach((radio) => {
          radio.addEventListener("change", () => {
 
            document.getElementsByClassName("volumeDiscount"+volumeIndex+bundleIndex).forEach((selected)=>{
             selected.options[0].selected = true
              
              let price = selected.options[0].getAttribute('data-id')
              console.log( document.getElementsByClassName("productPrice"+bundleIndex+volumeIndex))
            document.getElementsByClassName("productPrice"+bundleIndex+volumeIndex).forEach((priceDiv)=>{
                let xprice;
          if (el.bundleDetail.discountedProductType == "all_products") {
            xprice = (
            price / 100
            ).toFixed(2);
          } else {
            xprice = price;
          }
              console.log(sdCurrencySymbolCode)
          let newProductPrice = sdCurrencySymbolCode.replace("{{amount}}",xprice);
              priceDiv.innerText = newProductPrice
            })
            })
            radioGroup.forEach((r) => {
              if (r.checked) {
                r.parentElement.parentElement.nextSibling.classList.remove(
                  "close"
                );
              } else {
                r.parentElement.parentElement.nextSibling.classList.add(
                  "close"
                );
              }
            });
          });
        });

        
      
        
      });

      let volBundle = document.getElementsByClassName(
        "sd-volumeBundle" + bundleIndex
      )[0];
   
      let volBundleData = volBundle.querySelectorAll(
        ".sd-radio-btn" + bundleIndex
      );
      volBundleData.forEach((e) => {
        if (e.checked == true) {
          let getId = e.getAttribute("id");
          let getIdData = document.querySelectorAll("." + getId);
          getIdData.forEach((id) => {
            bundleSum[bundleIndex].push(id.options[0].getAttribute("data-id"));

            bundleData[bundleIndex].push({ id: id.value, quantity: 1 });
            gidArray[bundleIndex].push(
              "gid://shopify/ProductVariant/" + id.value
            );
          });
        }
      });
      let radioBtnBundle = document.getElementsByClassName(
        "sd-radio-btn" + bundleIndex
      );
      radioBtnBundle.forEach((elem,ind) => {
        elem.addEventListener("change", (e) => {
   
          optionIndex = ind
          bundleData[bundleIndex] = [];
          bundleSum[bundleIndex] = [];
          gidArray[bundleIndex] = [];
          let getId = e.target.id;
          // // console.log(getId);
          let getIdData = document.querySelectorAll("." + getId);
          // volumeBundleSum.push()
          getIdData.forEach((id) => {
       
            bundleSum[bundleIndex].push(id.options[0].getAttribute("data-id"));

            bundleData[bundleIndex].push({ id: id.value, quantity: 1 });
            gidArray[bundleIndex].push(
              "gid://shopify/ProductVariant/" + id.value
            );
          });
         
          let total = bundleSum[bundleIndex].reduce(
            (accumulator, currentValue) => {
              return accumulator + parseInt(currentValue, 10);
            },
            0
          ); 

             let xprice;
          let xtotal
          if (el.bundleDetail.discountedProductType == "all_products") {
            xprice = (
              total / 100
            ).toFixed(2);
            xtotal= (total / 100
            ).toFixed(2);
          } else {
            xprice = total;
         xtotal= total
          }
          let newProductPrice = sdCurrencySymbolCode.replace(
            "{{amount}}",xprice
          );
          
          const showTotalval = document.getElementById(
            `sd-bundle-volume-discounted-price${bundleIndex}`
          );
      
          showTotalval.innerText = newProductPrice;

            if ( el.bundleDetail.discountOptions[ind].type == "percent") {
              // // // console.log(el.bundleDetail.discountValue)
              let part = parseFloat( el.bundleDetail.discountOptions[ind].value);
              // // console.log(part);
              let percentage = (xtotal * part) / 100;
              result = xtotal - percentage;
              discountedPrice = result.toFixed(2);
            } else if ( el.bundleDetail.discountOptions[ind].type == "fixed") {
              let part = parseFloat( el.bundleDetail.discountOptions[ind].value);
              let fixed = xtotal - part;
              discountedPrice = fixed.toFixed(2);
            } else if ( el.bundleDetail.discountOptions[ind].type == "price") {
              let part = parseFloat( el.bundleDetail.discountOptions[ind].value);
              discountedPrice = part;
            } 
          let newDiscountedProductPrice = sdCurrencySymbolCode.replace(
            "{{amount}}",
            discountedPrice
          );
         if(el.bundleDetail.discountOptions[optionIndex].type == "noDiscount" || el.bundleDetail.discountOptions[optionIndex].type == "freeShipping"){
    
         document.getElementById(
            "sd-bundle-volume-discount-final-price" + bundleIndex
          ).innerText = newProductPrice
      }else{
        
        document.getElementById(
            "sd-bundle-volume-discount-final-price" + bundleIndex
          ).innerText = newDiscountedProductPrice
      }
         
        });
      });
   

      let total = bundleSum[bundleIndex].reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue, 10);
      }, 0);
                  let dNewTotalprice;
          if (el.bundleDetail.discountedProductType == "all_products"){
            dNewTotalprice = (total / 100);
          } else {
            dNewTotalprice = total
          }
            
             console.log("->")
           console.log("____________",dNewTotalprice)
        if ( el.bundleDetail.discountOptions[0].type == "percent") {
          // // // console.log(el.bundleDetail.discountValue)
          let part = parseFloat(el.bundleDetail.discountOptions[0].value);
          // // console.log(part);
          let percentage = (dNewTotalprice * part) / 100;
          result = dNewTotalprice - percentage;
          discountedPrice = result.toFixed(2);
        } else if (el.bundleDetail.discountOptions[0].type == "fixed") {
          let part = parseFloat(el.bundleDetail.discountOptions[0].value);
          let fixed = dNewTotalprice - part;
          discountedPrice = fixed.toFixed(2);
        } else if (el.bundleDetail.discountOptions[0].type == "price") {
          let part = parseFloat(el.bundleDetail.discountOptions[0].value);
          discountedPrice = part;
        } 

      let totalDiv = document.createElement("div");
      totalDiv.className = "sd-bundle-volume-total-box";
      // VOLUME_DIV.append(totalDiv)
      let totalTextDiv = document.createElement("div");
      totalTextDiv.className = "sd-bundle-volume-total-text";
        totalTextDiv.style.color = el.customization.volume.totalSection.color
      totalTextDiv.innerText = el.translations.translation.total;
      let totalDiscountDiv = document.createElement("div");
      totalDiscountDiv.className = "sd-bundle-volume-total-discount-box";
      let firstDiscountText = document.createElement("div");
       totalDiscountDiv.append(firstDiscountText)
      firstDiscountText.className = "sd-bundle-volume-discounted-price";
      firstDiscountText.id = `sd-bundle-volume-discounted-price${bundleIndex}`;
        firstDiscountText.style.color = el.customization.volume.totalSection.originalPrice.color
        firstDiscountText.style.fontSize = el.customization.volume.totalSection.originalPrice.fontSize +"px"
      let tPrice;
      if (el.bundleDetail.discountedProductType == "all_products") {
        tPrice = (total / 100).toFixed(2);
      } else {
        tPrice = total;
      }
      let newFirstDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        tPrice
      );

      firstDiscountText.innerText = newFirstDiscountPrice;
     
      let secondDiscountText = document.createElement("div");
      secondDiscountText.className = "sd-bundle-volume-discount-final-price";
      secondDiscountText.style.color = el.customization.volume.totalSection.finalPrice.color
      secondDiscountText.style.fontSize = el.customization.volume.totalSection.finalPrice.fontSize +"px"
      secondDiscountText.id =
        "sd-bundle-volume-discount-final-price" + bundleIndex;
      let newSecondDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        discountedPrice
      );
      if(el.bundleDetail.discountOptions[optionIndex].type == "noDiscount" || el.bundleDetail.discountOptions[optionIndex].type == "freeShipping"){
        console.log("freeshippings") 
        secondDiscountText.innerText = newFirstDiscountPrice;
      }else{
        
        secondDiscountText.innerText = newSecondDiscountPrice;
      }
      totalDiscountDiv.append( secondDiscountText);
      totalDiv.append(totalTextDiv, totalDiscountDiv);
      let addToCart = document.createElement("div");
      addToCart.className = "sd-bundle-volume-add-to-cart-container";
      totalDiv.className = "sd-bundle-volume-addtocart-box";
        totalDiv.style.background = el.customization.volume.totalSection.backgroundColor;
      VOLUME_DIV.append(totalDiv);
      let addToCartBtn = document.createElement("button");
      addToCartBtn.className = "sd-bundle-volume-addtocart-btn";
      addToCartBtn.style.background =
        el.customization.volume.button.backgroundColor;
      addToCartBtn.style.color = el.customization.volume.button.color;
      addToCartBtn.style.fontSize = `${el.customization.volume.button.fontSize}px`;

      addToCartBtn.innerText = el.translations.translation.addToCartButton;
      addToCart.append(addToCartBtn);

      if (el.customization.volume.button.position == "bottom") {
        VOLUME_DIV.append(addToCart);
      } else {
        VOLUME_DIV.prepend(addToCart);
      }
      
      addToCartBtn.addEventListener("click", function () {
        addToCartBtn.innerText = "";
        let volumeBtnSpinner = document.createElement("div");
        addToCartBtn.append(volumeBtnSpinner);
        volumeBtnSpinner.className = "bundleBtnSpinner";
        volumeBtnSpinner.style.display = "block";

        const mergedArray = bundleData[bundleIndex].reduce(
          (acc, curr) => acc.concat(curr),
          []
        );
        const mergedGidArray = gidArray[bundleIndex].reduce(
          (acc, curr) => acc.concat(curr),
          []
        );
     
        let mergedResult = {};
        for (let item of mergedArray) {
          if (mergedResult[item.id]) {
            mergedResult[item.id].quantity += item.quantity;
          } else {
            mergedResult[item.id] = { ...item };
          }
        }
        let mergedArrayResult = Object.values(mergedResult);

        let formData = {
          items: mergedArrayResult,
           attributes:{"SD_BUNDLE_ID":el._id}
        };
        fetch(window.Shopify.routes.root + "cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            // // console.log("POST CART/ADD.JS=>",response);
            let errorDiv = document.getElementsByClassName(
              "sd-bundle-error-message"
            );
            errorDiv[0]?.remove();
            if (response.status == 422 || response.status == 404) {
              addToCartBtn.innerText =
                el.translations.translation.addToCartButton;
              volumeBtnSpinner.remove();
              let errorMessage = document.createElement("div");
              errorMessage.className = "sd-bundle-error-message";
              VOLUME_DIV.append(errorMessage);
              // // console.log(response.description);
              errorMessage.innerText = response.description;
            } else {
            
              fetch(window.Shopify.routes.root + "cart.js", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => {
                  return response.json();
                })
                .then((response) => {
                  console.log("cart js =>",response)
                  if(el.bundleDetail.discountOptions[optionIndex].type == "noDiscount"){
                           console.log("---------------no discount---------------")
                    
                      fetch(`${server}/api/storefront/getBundleClick`,{
                        method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      shop: Shopify.shop,
                      bundleId:el._id
                    }),
                      })
                      let isDiscount =  el.bundleDetail.discountOptions[optionIndex].type == "noDiscount" ? "noDiscount" : "Fix"
                        let sd_bundle_data = {
                          discount_name: el.name,
                          code: el.settings.discountLabel,
                          bundleId : el._id,
                          discountType: isDiscount,
                          variantsId: mergedArrayResult,
                          discountCreateId: "",
                        };
                        var jsonString = JSON.stringify(sd_bundle_data);
                        localStorage.setItem("sd_bundle_data", jsonString);
                        addToCartBtn.innerText =
                          el.translations.translation.addToCartButton;
                        volumeBtnSpinner.remove();
                        window.location.assign(`https://${Shopify.shop}/cart`);
                    
                  }else{
                 console.log("get discount")
                    let finalSumBundle = bundleSum[bundleIndex].reduce(
                    (acc, curr) => acc.concat(curr),
                    []
                  );
                  let myArray = finalSumBundle.map(parseFloat);
                  console.log("myarray",myArray)
                  let total = myArray.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                  );
                        let xtotalprice;
                         if (el.bundleDetail.discountedProductType == "all_products") {
                           xtotalprice = (
                             total / 100
                           ).toFixed(2);
                         } else {
                           xtotalprice = total;
                         }

                    let finalPrice;
                   
                     console.log("discountedPrice",discountedPrice)
                     console.log("total",xtotalprice)
                    console.log(el.bundleDetail.discountOptions[optionIndex].type)
                  switch (el.bundleDetail.discountOptions[optionIndex].type) {
                    case "percent":
                      let percentage = xtotalprice - discountedPrice
                      // result = total - percentage;
                      if(el.bundleDetail.discountedProductType == "all_products"){
                      finalPrice = percentage.toFixed(2);  
                      }else{
                        
                      finalPrice = percentage.toFixed(2);
                      }
                      break;
                    case "price":
                      let pricePart = parseFloat(el.bundleDetail.discountOptions[optionIndex].value);
                      result = xtotalprice - pricePart;
                      finalPrice = result.toFixed(2);
                      break;
                    case "fixed":
                      let fixedPart = parseFloat(el.bundleDetail.discountOptions[optionIndex].value);
                      finalPrice = fixedPart.toFixed(2);
                      break;
                    default:
                      console.log("how are you ?");
                      break;
                  }
                    console.log(finalPrice)
                    console.log("xtotal",xtotalprice)
                
                    let isDiscount =  el.bundleDetail.discountOptions[optionIndex].type == "noDiscount" ? "noDiscount" : "Fix"
             
                  let sd_bundle_data = {
                    discount_name: el.name,
                    code: el.settings.discountLabel,
                    discountType: "Fix",
                    discountValue: finalPrice,
                    variantsId: mergedGidArray,
                    startDate: el.startdate,
                    endDate: el.endDate,
                    shop: Shopify.shop,
                    bundleType: isDiscount,
                    totalPrice: xtotalprice,
                  }; 

                    console.log(sd_bundle_data)
            
                  fetch(server + "/api/storefront/createRule", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sd_bundle_data),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      console.log("CREATE RULE",data)
                      if (data.status == 200) {
                         fetch(`${server}/api/storefront/getBundleClick`,{
                        method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      shop: Shopify.shop,
                      bundleId:el._id
                    }),
                      })

                       let isDiscount =  el.bundleDetail.discountOptions[optionIndex].type == "noDiscount" ? "noDiscount" : "Fix"
                        let sd_bundle_data = {
                          discount_name: el.name,
                          code: el.settings.discountLabel,
                          bundleId : el._id,
                           discountType: isDiscount,
                          variantsId: mergedArrayResult,
                          discountCreateId: data.response,
                        };
                        var jsonString = JSON.stringify(sd_bundle_data);
                        localStorage.setItem("sd_bundle_data", jsonString);
                        addToCartBtn.innerText =
                          el.translations.translation.addToCartButton;
                        volumeBtnSpinner.remove();
                        window.location.assign(`https://${Shopify.shop}/cart`);
                      }
                    });
                  }
                 
                  // .catch((err) => console.error(err));
                })
                .catch((error) => {
                  // console.log(error.message);
                });
            }
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      });

         waterMark(VOLUME_DIV)
      }else{
        console.log("nodate")
      }
    
    } else if (el.type == "collectionMixMatch") {
        //--------------------------------------------------------------------------Collection Bundle----------------------------------------------------------------------------
          let StoreCurrentTime = new Date().toISOString('en-US',{timeZone:el.startdate})
      console.log("startdate",StoreCurrentTime)
       let checkDate = el.endDate =="" ? true :sdCurrentDateTime <= el.endDate  ;
       console.log("checckdate",checkDate)
  
      if (sdCurrentDateTime >= el.startdate && checkDate) {
         console.log("colleciton mix match",el)
      let collectionDiv = document.createElement("div");
      collectionDiv.className = "sd-bundle-collectionMixMatch-container";

      collectionDiv.style.background = el.customization.collectionMixMatch.box.backgroundColor
      collectionDiv.style.border = "1px solid" +el.customization.collectionMixMatch.box.borderColor
      collectionDiv.style.borderRadius =  el.customization.collectionMixMatch.box.borderRadius+"px"
      mainDiv.append(collectionDiv);

      let VOLUME_HEADER_DIV = document.createElement("div");
      VOLUME_HEADER_DIV.className = "sd-collectionMM-discount-badge";
      VOLUME_HEADER_DIV.style.background = el.customization.collectionMixMatch.saveDiscount.backgroundColor;
      VOLUME_HEADER_DIV.style.color = el.customization.collectionMixMatch.saveDiscount.color;
      VOLUME_HEADER_DIV.style.fontSize = el.customization.collectionMixMatch.saveDiscount.fontSize + "px";
      VOLUME_HEADER_DIV.style.borderTopLeftRadius =  el.customization.collectionMixMatch.box.borderRadius+"px"
      let discountBadge = document.createElement("span");
      discountBadge.className = "sd-collectionMM-badge";
      discountBadge.innerText = el.translations.translation.grabTheDeal;
      VOLUME_HEADER_DIV.append(discountBadge);
      collectionDiv.append(VOLUME_HEADER_DIV);

      let COLLECTION_MAINSECTION = document.createElement("div");
      COLLECTION_MAINSECTION.className = "sd-collectionMM-main-section";
      collectionDiv.append(COLLECTION_MAINSECTION);
      let customiseSection = document.createElement("div");
      customiseSection.className = "sd-collectioMM-customise-section";
     
      customiseSection.style.textAlign =  el.customization.collectionMixMatch.title.alignment
      COLLECTION_MAINSECTION.append(customiseSection);
      let customiseTitle = document.createElement("div");
      customiseTitle.className = "sd-collectionMM-customise-title-box";
      customiseSection.append(customiseTitle);
      let customiseTitleText = document.createElement("p");
      customiseTitleText.className = "sd-collection-customise-title-text";
      customiseTitleText.innerText = el.title;
      customiseTitleText.style.color = el.customization.collectionMixMatch.title.color;
      customiseTitleText.style.fontSize = el.customization.collectionMixMatch.title.fontSize+"px";
      
      customiseTitle.append(customiseTitleText);

      let customiseDescription = document.createElement("div");
      customiseDescription.className =
        "sd-collectionMM-customise-description-box";
      customiseSection.append(customiseDescription);
      let customiseDescriptionText = document.createElement("p");
      customiseDescriptionText.className =
        "sd-collectionMM-customise-description-text";
      customiseDescriptionText.innerText = el.bundleDetail.description;
      customiseDescriptionText.style.color = el.customization.collectionMixMatch.title.description.color
      customiseDescriptionText.style.fontSize = el.customization.collectionMixMatch.title.description.fontSize+"px"
      customiseDescription.append(customiseDescriptionText);

      let dividerDiv = document.createElement("div");
      // customiseSection.append(dividerDiv)
      let divider = document.createElement("div");
      divider.className = "sd-bundle-divider";
      dividerDiv.append(divider);
      COLLECTION_MAINSECTION.append(dividerDiv);
      el.bundleDetail.products.forEach((ele,index) => {
        let selectedCollection = document.createElement("div");
        selectedCollection.className = "sd-collectionMM-selected-collection";
        COLLECTION_MAINSECTION.append(selectedCollection);
        let selectedCollectionData = document.createElement("div");
        selectedCollectionData.className = "sd-collectionMM-collecttion-data";
        selectedCollection.append(selectedCollectionData);
        
          if (index < el.bundleDetail.products.length - 1) {
          let BUNDLE_PLUS_BTN_DIV = document.createElement("div");
          BUNDLE_PLUS_BTN_DIV.className = "sd-bundle-plusBtn-box";
            BUNDLE_PLUS_BTN_DIV.style.background =  el.customization.collectionMixMatch.collectionDetails.plus.backgroundColor;
          let BUNDLE_PLUS_SPAN_SVG = document.createElement("span");
            BUNDLE_PLUS_SPAN_SVG.style.color = el.customization.collectionMixMatch.collectionDetails.plus.color
          BUNDLE_PLUS_SPAN_SVG.className = "sd-bundle-plus";
          BUNDLE_PLUS_SPAN_SVG.innerHTML = `<svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg>`;
          BUNDLE_PLUS_BTN_DIV.append(BUNDLE_PLUS_SPAN_SVG);
          COLLECTION_MAINSECTION.append(BUNDLE_PLUS_BTN_DIV);
        } else {
          // // console.log("ENTER IN ELSE CONDITION");
        }
       
        let selectedCollectionName = document.createElement("p");
        selectedCollectionName.style.color =  el.customization.collectionMixMatch.collectionDetails.title.color
        selectedCollectionName.style.fontSize =  el.customization.collectionMixMatch.collectionDetails.title.fontSize + "px"
        selectedCollectionName.innerText = ele.title;
        selectedCollectionData.append(selectedCollectionName);
        let selectedCollectionQuantity = document.createElement("p");
        selectedCollectionQuantity.innerText = `Add ${ele.quantity} items from Home page collection`;
        selectedCollectionQuantity.style.color = el.customization.collectionMixMatch.collectionDetails.description.color
        selectedCollectionQuantity.style.fontSize = el.customization.collectionMixMatch.collectionDetails.description.fontSize + "px"
        selectedCollectionData.append(selectedCollectionQuantity);

        let SelectedCollectionImgDiv = document.createElement("div");
        SelectedCollectionImgDiv.className =
          "sd-collectionMM-selected-collection-img";
        SelectedCollectionImgDiv.style.border = "1px solid"+ el.customization.collectionMixMatch.collectionDetails.imageBorderColor
        selectedCollection.append(SelectedCollectionImgDiv);
        let selectedCollectionImg = document.createElement("img");
        selectedCollectionImg.style.width = "100%";
        let collectionImg = ele?.image?.originalSrc ?? smartNoImg
        selectedCollectionImg.setAttribute("src",collectionImg);
        SelectedCollectionImgDiv.append(selectedCollectionImg);
      });

      let go_to_bundleBuilder_btn = document.createElement("button");
      go_to_bundleBuilder_btn.className = "sd-collection-bundleBuilder-btn";
      go_to_bundleBuilder_btn.style.background =  el.customization.collectionMixMatch.button.backgroundColor;
      go_to_bundleBuilder_btn.style.color =  el.customization.collectionMixMatch.button.color;
      go_to_bundleBuilder_btn.style.fontSize =  el.customization.collectionMixMatch.button.fontSize+"px";
       // if(el.customization.collectionMixMatch.button.position == )
      go_to_bundleBuilder_btn.innerText =
        el.translations.translation.goToBundleBuilder;

      COLLECTION_MAINSECTION.append(go_to_bundleBuilder_btn);
      go_to_bundleBuilder_btn.addEventListener("click", async (e) => {
        go_to_bundleBuilder_btn.innerText = "";
        let collectionSpinner = document.createElement("div");
        go_to_bundleBuilder_btn.append(collectionSpinner);
        collectionSpinner.className = "bundleBtnSpinner";
        collectionSpinner.style.display = "block";

        // // console.log(el);
        const data = {
          shop: Shopify.shop,
        };
        fetch(server + "/api/storefront/getPage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status == 400) {
              // // console.log("create new");
              fetch(server + "/api/storefront/createPage", {
                method: "POST",
                headers: {
                  "content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((response) => {
                  // // console.log(a);
                  // // console.log(response);
                  if (response.status == 200) {
                    go_to_bundleBuilder_btn.innerText =
                      el.translations.translation.goToBundleBuilder;
                    collectionSpinner.remove();
                    // // console.log("enter in url1")
                    let newWindow = window.open('', '_blank');
                newWindow.location.href =  `https://${Shopify.shop}/pages/collection-mix-match?b=${el._id}`;
                   
                  }
                });
              // // .catch((error) => console.log(error.message));
            } else {
              // // console.log("b");
              // // console.log(response);
              if (response.status == 200) {
                // // console.log("enter in url2")
                go_to_bundleBuilder_btn.innerText =
                  el.translations.translation.goToBundleBuilder;

                collectionSpinner.remove();
                let newWindow = window.open('', '_blank');
                newWindow.location.href =  `https://${Shopify.shop}/pages/collection-mix-match?b=${el._id}`;
                // window.open(
                //   `https://${Shopify.shop}/pages/Collection-Mix-Match?b=${el._id}`,
                //   "_blank"
                // );
              }
            }
          });
        // // .catch((error) => console.log(error));
      });
     
        waterMark(collectionDiv)
      }else{
        console.log("no")
      }
     
    }
  });
}
let selectedProducts = [];
let pageInfoTotalPrice;
async function bundlePageBuilder(data) {
  console.log("builder data",data)
  const url = window.location.href;

  let mainContainer = document.getElementById("sd-bundle-container");
  // let bundleLoader = document.createElement("div");
  // bundleLoader.className = "sd-bundle-builder-spinner";
  // bundleLoader.id = "sd-bundle-builder-spinner";
  // mainContainer.append(bundleLoader);
  // bundleLoader.style.display = "block";
  if (data.status == 200) {
    let pageWidth = document.getElementsByClassName("page-width--narrow")[0];
    pageWidth.style.width = "100%";
    pageWidth.style.left = "0px";
    pageWidth.style.marginRight = "0px";
    pageWidth.style.marginLeft = "0px";
    pageWidth.style.maxWidth = "100%";
    pageWidth.style.paddingLeft = "unset";
    pageWidth.style.paddingRight = "unset";
    pageWidth.style.textAlign = "center";
    let innerPageWidth = document.getElementsByClassName("rte")[0];
    innerPageWidth.style.width = "100%";
    innerPageWidth.style.left = "0px";
    innerPageWidth.style.marginRight = "0px";
    innerPageWidth.style.marginLeft = "0px";
    innerPageWidth.style.maxWidth = "100%";
    innerPageWidth.style.paddingLeft = "unset";
    innerPageWidth.style.paddingRight = "unset";
    innerPageWidth.style.textAlign = "center";
    // width: 100%; left: 0px; margin-right: 0px; margin-left: 0px; max-width: 100%; padding-left: unset; padding-right: unset; text-align: center;
    // bundleLoader.style.display = "none";
    let BUNDLE = data.response;
    // // // console.log(collectionProduct)
    // // console.log(BUNDLE);
    // // console.log(BUNDLE.products);
    let mainContainer = document.getElementById("sd-bundle-container");

    let BUNDLE_BUILDER_DIV = document.createElement("div");
    mainContainer.append(BUNDLE_BUILDER_DIV);
    BUNDLE_BUILDER_DIV.className = "sd-bundle-builder-container";

    let BUNDLE_BUILDER_TITLE_DIV = document.createElement("div");
    BUNDLE_BUILDER_TITLE_DIV.className = "sd-bundle-builder-title-container";
    BUNDLE_BUILDER_DIV.append(BUNDLE_BUILDER_TITLE_DIV);
    let bundlebuilderTitle = document.createElement("div");
    bundlebuilderTitle.className = "sd-bundle-builder-title";
    BUNDLE_BUILDER_TITLE_DIV.append(bundlebuilderTitle);
    let titleText = document.createElement("span");
    titleText.className = "sd-bundle-builder-title-text";
    titleText.innerText = BUNDLE.title;
    bundlebuilderTitle.append(titleText);
    let bundleDescription = document.createElement("div");
    BUNDLE_BUILDER_TITLE_DIV.append(bundleDescription);
    bundleDescription.className = "sd-bundle-builder-description-box";
    let descriptionText = document.createElement("span");
    descriptionText.className = "sd-bundle-builder-description-text";
    descriptionText.innerText = BUNDLE.bundleDetail.description;
    bundleDescription.append(descriptionText);
    let BUNDLE_DATA_DIV = document.createElement("div");
    BUNDLE_DATA_DIV.className = "sd-bundle-builder-data-container";
    BUNDLE_BUILDER_DIV.append(BUNDLE_DATA_DIV);

    BUNDLE.bundleDetail.products.forEach((el, index) => {
     
      selectedProducts.push([]);
      let collectionDiv = document.createElement("div");
      collectionDiv.className = "sd-bundle-builder-collection-data";
      BUNDLE_DATA_DIV.append(collectionDiv);
      let collectionDataHeader = document.createElement("div");
      collectionDataHeader.className =
        "sd-bundle-builder-collection-data-header";
      collectionDiv.append(collectionDataHeader);
      let arrowBtn = document.createElement("div");
      arrowBtn.className = "sd-bundle-builder-arrow";
      arrowBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#5E5E5E" xmlns="http://www.w3.org/2000/svg" style=" width: 30px; height: 30px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00025 16C7.74425 16 7.48825 15.902 7.29325 15.707C6.90225 15.316 6.90225 14.684 7.29325 14.293L11.5863 10L7.29325 5.70701C6.90225 5.31601 6.90225 4.68401 7.29325 4.29301C7.68425 3.90201 8.31625 3.90201 8.70725 4.29301L13.7073 9.29301C14.0983 9.68401 14.0983 10.316 13.7073 10.707L8.70725 15.707C8.51225 15.902 8.25625 16 8.00025 16Z" fill="current"></path></svg>`;
      collectionDataHeader.append(arrowBtn);

      arrowBtn.className = "sd-accordion-arrow";

      let collectionImgDiv = document.createElement("div");
      collectionImgDiv.className = "sd-bundle-builder-image-box";
      collectionDataHeader.append(collectionImgDiv);
      let collectionImg = document.createElement("img");
      collectionImg.className = "sd-bundle-builder-collection-image";
      let collectionBuilderImg = el?.image?.originalSrc ?? smartNoImg
      collectionImg.setAttribute("src",collectionBuilderImg);
      collectionImgDiv.append(collectionImg);
      let collectionTitleDiv = document.createElement("div");
      collectionTitleDiv.className = "sd-bundle-builder-title-div";
      collectionDataHeader.append(collectionTitleDiv);
      collectionDataHeader.addEventListener("click", (e) => {
        let accordingDiv = document.getElementsByClassName(
          "sd-bundle-CMM-main-Box" + index
        );
        if (accordingDiv[0].style.maxHeight === "0px") {
          accordingDiv[0].style.maxHeight = "694px";
          arrowBtn.classList.add("sd-accordion-active");
        } else {
          accordingDiv[0].style.maxHeight = "0px";
          arrowBtn.classList.remove("sd-accordion-active");
        }
      });
      let collectionTitle = document.createElement("div");
      collectionTitle.className = "sd-bundle-builder-collection-title-text";
      collectionTitle.innerText = el.title;
      collectionTitleDiv.append(collectionTitle);
      let collectionAddItemText = document.createElement("div");
      collectionAddItemText.className = "sd-bundle-builder-additemtext";

      let TranslatedcollectionAddItemText =
        data.response.translations.translation.addItemToSaveMore.replace(
          "{{item}}",
          el.quantity
        );
      // console.log(TranslatedcollectionAddItemText);
      collectionAddItemText.innerText = TranslatedcollectionAddItemText;
      collectionTitleDiv.append(collectionAddItemText);

      let collctionProductMainBox = document.createElement("div");
      collctionProductMainBox.className = "sd-bundle-CMM-main-Box" + index;
      collctionProductMainBox.classList.add("sd-accordion-panel");
      // collctionProductMainBox.style.display = "none"
      collctionProductMainBox.style.maxHeight = "0px";
      collectionDiv.append(collctionProductMainBox);

      // // console.log("products--", el);
      let nextPageCursor = "";
      let hasNextPage = "";
      let collectionGid = el.id;

      fetch(server + "/api/storefront/getCollectionProdcuts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shop: Shopify.shop,
          collectionGid: collectionGid,
          nextPageCursor: nextPageCursor,
          hasNextPage: hasNextPage,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(">>>>",response);
          const lastValue =
            response?.response?.products?.edges[
              response?.response?.products?.edges?.length - 1
            ];
          nextPageCursor = lastValue?.cursor;
          hasNextPage = response?.response?.products?.pageInfo?.hasNextPage;

          let bundleDivider = document.createElement("div");
          bundleDivider.className = "sd-bundle-builder-divider";
          collctionProductMainBox.append(bundleDivider);
          let searchBarDiv = document.createElement("div");
          searchBarDiv.className = "sd-bundle-builder-search-bar-container";
          collctionProductMainBox.append(searchBarDiv);
          let searchBar = document.createElement("input");
          searchBar.className = "sd-bundle-builder-search-bar";
          searchBar.setAttribute("type", "text");
          searchBar.placeholder = "Search Products";
          searchBarDiv.append(searchBar);
          let CollectionProductDiv = document.createElement("div");
          CollectionProductDiv.className =
            "sd-bundle-collectionMixMatch-all-product-div";
          CollectionProductDiv.classList.add(
            "collectionMixMatch-allProduct-div" + index
          );
          collctionProductMainBox.append(CollectionProductDiv);
          // console.log("<<<<",response);
          
         
          let pdata = response?.response?.products;
          CollectionProductsData(pdata, CollectionProductDiv);
          let delayTimer;

          
           let searchSpinner = document.createElement("div")

          
          searchBar.addEventListener("keyup", (e) => {
            CollectionProductDiv.innerHTML =""
            // searchSpinner.innerText = "loading..."
            searchSpinner.className = "sd-search-spinner"
            searchSpinner.classList.add("sd-loader")
            CollectionProductDiv.append(searchSpinner)
                   document.getElementsByClassName("sd-builder-seemore-div" + index)[0].style.display = "none"
             
             clearTimeout(delayTimer);
             delayTimer = setTimeout(function () {
        if (e.target.value.length > 0) {
              fetch(server + "/api/storefront/searchCollectionProducts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  shop: Shopify.shop,
                  collectionGid: collectionGid,
                  nextPageCursor: nextPageCursor,
                  hasNextPage: hasNextPage,
                  search: e.target.value,
                }),
              })
                .then((res) => res.json())
                .then((response) => {
                  console.log("ENTER IN SEARCH API");
                  CollectionProductDiv.innerHTML = "";
                  console.log("new", response);
                   if(response.response.edges){
                  const lastValue = response?.response?.edges[response.response.edges.length - 1];
                  nextPageCursor = lastValue?.cursor;
                  hasNextPage = response?.response?.pageInfo?.hasNextPage;
                   }else{
                  hasNextPage = false;
                   }
                  if(hasNextPage == false){
                   document.getElementsByClassName("sd-builder-seemore-div" + index)[0].style.display = "none"
                  }else{
                   document.getElementsByClassName("sd-builder-seemore-div" + index)[0].style.display = "block"
                    
                  }
                  console.log("hasNextPage", hasNextPage);
                    let pdata = response.response;
                  
                  CollectionProductsData(pdata, CollectionProductDiv);
                })
                .catch((error) => {
                  // // console.log(error.message);
                });
            } else {
              fetch(server + "/api/storefront/getCollectionProdcuts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  shop: Shopify.shop,
                  collectionGid: collectionGid,
                  nextPageCursor: nextPageCursor,
                  hasNextPage: hasNextPage,
                }),
              })
                .then((res) => res.json())
                .then((response) => {
                  CollectionProductDiv.innerHTML = "";
                  console.log("new", response);
                  const lastValue =
                    response?.response?.products?.edges[
                      response?.response?.products?.edges?.length - 1
                    ];
                  nextPageCursor = lastValue?.cursor;
                  hasNextPage = response?.response?.products?.pageInfo?.hasNextPage;
                  let pdata = response?.response?.products;
                    if(hasNextPage == false){
                   document.getElementsByClassName("sd-builder-seemore-div" + index)[0].style.display = "none"
                  }else{
                   document.getElementsByClassName("sd-builder-seemore-div" + index)[0].style.display = "block" 
                  }
                  CollectionProductsData(pdata, CollectionProductDiv);
                })
                .catch((error) => {
                  // // console.log(error.message);
                });
            }
  }, 1000);
            
          
          });
           console.log("seeMore",hasNextPage)
          if (hasNextPage == true) {
            let seeMoreButtonDiv = document.createElement("div");
            seeMoreButtonDiv.className = "sd-bundle-CMM-see-more-div";
            seeMoreButtonDiv.classList.add("sd-builder-seemore-div" + index);
            collctionProductMainBox.append(seeMoreButtonDiv);
            let seeMoreButton = document.createElement("button");
            seeMoreButton.className = "sd-bundle-CMM-seeMore-btn";
            seeMoreButton.innerText =
              data.response.translations.translation.seeMore;
            seeMoreButtonDiv.append(seeMoreButton);

            seeMoreButton.addEventListener("click", (e) => {
              seeMoreButton.classList.add("sd-spinnerDiv");
              let spinnerDiv = document.createElement("div");
              seeMoreButton.innerHTML = '<div class="sd-loader"></div>';

              let formData = {
                shop: Shopify.shop,
                hasNextPage: hasNextPage,
                gid: response.response.id,
                nextPageCursor: nextPageCursor,
              };

              fetch(server + "/api/storefront/getMoreCollectionProducts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              })
                .then((res) => res.json())
                .then((response) => {
                  // // console.log(response);
                  if (response.flag == 1) {
                    const sdLoader =
                      document.getElementsByClassName("sd-loader");
                    // sdLoader[0].remove()
                    seeMoreButton.innerText =
                      data.response.translations.translation.seeMore;
                    seeMoreButton.classList.remove("sd-spinnerDiv");
                    const lastValue =
                      response?.response?.products?.edges[
                        response?.response?.products?.edges?.length - 1
                      ];
                    nextPageCursor = lastValue?.cursor;
                    hasNextPage =
                      response?.response?.products?.pageInfo?.hasNextPage;
                   if(hasNextPage == false){
                      document.getElementsByClassName(
              "sd-builder-seemore-div" + index
            )[0].style.display = "none";
                   }else{
                      document.getElementsByClassName(
              "sd-builder-seemore-div" + index
            )[0].style.display = "block";
                   }
                    let pdata = response?.response?.products;

                    CollectionProductsData(pdata, CollectionProductDiv);

                  } else {
                    // // console.log("no more products left");
                    document.getElementsByClassName(
                      "sd-builder-seemore-div" + index
                    )[0].style.display = "none";
                  }
                })
                .catch((error) => {
                  // // console.log(error.message);
                });
            });
          }else{
            console.log("no page")
          }

          if (hasNextPage == false) {
            document.getElementsByClassName(
              "sd-builder-seemore-div" + index
            )[0].style.display = "none";
          } else if (hasNextPage == true) {
            document.getElementsByClassName(
              "sd-builder-seemore-div" + index
            )[0].style.display = "block";
          }
        })
        .catch((error) => {
          // // console.log(error.message);
        });

      function CollectionProductsData(response, newDiv) {
   
     // console.log("=>>>>>",response)
        if(response?.edges?.length){
          
        response.edges.map((ele) => {
          let productDiv = document.createElement("div");
          productDiv.className = "sd-bundle-CMM-productDiv";
          newDiv.append(productDiv);
          let productImageDiv = document.createElement("div");

          productImageDiv.className = "sd-bundle-CMM-product-img-div";
          productDiv.append(productImageDiv);
          let productImg = document.createElement("img");
          productImg.className = "sd-bundle-CMM-product-img";
          productImageDiv.append(productImg);
          let builderProductImg = ele?.node?.images?.edges[0]?.node?.url ?? smartNoImg
          productImg.setAttribute(
            "src",
            builderProductImg
          );
          let productTitleDiv = document.createElement("div");
          productTitleDiv.className = "sd-bundle-CMM-product-title-div";
          productDiv.append(productTitleDiv);
          productTitleDiv.innerText = ele.node.title;
          let productPriceDiv = document.createElement("div");
          productPriceDiv.className = "sd-bundle-builder-product-price";

          let newProductPrice = sdCurrencySymbolCode.replace(
            "{{amount}}",
            ele.node.variants.edges[0].node.price
          );

          productPriceDiv.innerText = newProductPrice;
          productDiv.append(productPriceDiv);

          let productButtonDiv = document.createElement("div");
          productButtonDiv.className = "sd-bundle-builder-product-btn-box";
          productDiv.append(productButtonDiv);

          if (ele.node.variants.edges.length <= 1) {
            let addProductButton = document.createElement("button");
            addProductButton.className = "sd-bundle-builder-add-product-btn";
            // console.log("abcdefghi", data);
            addProductButton.innerText =
              data.response.translations.translation.add;
            addProductButton.classList.add("sd-button-add");
            productButtonDiv.append(addProductButton);
            addProductButton.addEventListener("click", (e) => {
              // // console.log("ele","second");
              // // console.log(ele)
              // console.log(data.response.bundleDetail.products[index].quantity);
              // console.log(selectedProducts[index].length);
              if (
                data.response.bundleDetail.products[index].quantity >
                selectedProducts[index].length
              ) {
                selectedProducts[index].push({
                  title: ele.node.title,
                  variantTitle: ele.node.variants.edges[0].node.title,
                  id: ele.node.variants.edges[0].node.id,
                  price: ele.node.variants.edges[0].node.price,
                  image: ele?.node?.images?.edges[0]?.node.url,
                });
                   const getDiv = document.getElementById(
                      "sd-builder-info-variants-data" + index
                    );
                getDiv.innerHTML = ""
                // console.log(selectedProducts, "selectedProducts");
                // addselectedProductList(selectedProducts, index, "", data.response.bundleDetail.products);
              
                addselectedProductList(selectedProducts, index, "",data);
                // console.log("ADDING IN ARRAY", addselectedProductList)
                const quantity = document.getElementById(
                  `sd-quantityCheck${index}`
                );
                quantity.innerText = selectedProducts[index].length;
                 if (
                data.response.bundleDetail.products[index].quantity ==
                selectedProducts[index].length
              ) {
                   
                   console.log("match")
                   document.getElementsByClassName("sd-bundle-CMM-main-Box"+index)[0].style.maxHeight = "0px"
              }
                
              }
              // if(data.response.bundleDetail.products[index].quantity == selectedProducts[index].length){
              // //   console.log("approve")
              // }
              
              sumOfVariants(selectedProducts, data);
            // console.log ("checkCartButtonActive",checkCartButtonActive(selectedProducts,data.response.bundleDetail.products))
              if(!checkCartButtonActive(selectedProducts,data.response.bundleDetail.products)){
                  const getCartButton = document.getElementById("sd-builder-cart-info-add-btn")
               getCartButton.style.background = "black"
               getCartButton.style.color = "white"
               getCartButton.style.cursor = "pointer"
               getCartButton.disabled = false
              }
              
              // if( data.response.bundleDetail.products[index].quantity ==
              //   selectedProducts[index].length){
              //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ADD TO CART BUTTON <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
              //   const getCartButton = document.getElementById("sd-builder-cart-info-add-btn")
              //   getCartButton.style.color = "red"
              //   }
             
            });
          } else {
            let productSelectVariant = document.createElement("select");
            productSelectVariant.className = "sd-builder-select-variants";
            productButtonDiv.append(productSelectVariant);
            let productSelectOptions = document.createElement("option");
            productSelectVariant.append(productSelectOptions);
            productSelectOptions.value =
              data.response.translations.translation.add;
            productSelectOptions.innerText =
              data.response.translations.translation.add;
            productSelectOptions.hidden = true;
            // // console.log("ele", ele);
            ele.node.variants.edges.map((elem, variantIndex) => {
              // // console.log(elem)
              let productSelectOptions = document.createElement("option");
              productSelectOptions.value = elem.node.id.replace(
                "gid://shopify/ProductVariant/",
                ""
              );
              productSelectOptions.setAttribute("index", variantIndex);
              productSelectOptions.textContent = elem.node.title;
              productSelectVariant.appendChild(productSelectOptions);
            });
            productSelectVariant.addEventListener("change", (e) => {
              // console.log("selectedProducts", selectedProducts);
              // // // console.log(this.options[this.selectedIndex].getAttribute("index"))
              if (
                data.response.bundleDetail.products[index].quantity >
                selectedProducts[index].length
              ) {
                let get_val =
                  event.target.selectedOptions[0].getAttribute("index");
                // // console.log(ele.node.variants.edges[get_val].node)
                selectedProducts[index].push({
                  title: ele.node.title,
                  variantTitle: ele.node.variants.edges[get_val].node.title,
                  id: ele.node.variants.edges[get_val].node.id,
                  price: ele.node.variants.edges[get_val].node.price,
                  image: ele?.node?.images?.edges[0]?.node.url,
                });
                 const getDiv = document.getElementById(
                      "sd-builder-info-variants-data" + index
                    );
                getDiv.innerHTML = ""
                // addselectedProductList(selectedProducts, index, "", data.response.bundleDetail.products);
                addselectedProductList(selectedProducts, index, "",data);
                // console.log("ADDING IN ARRAY",selectedProducts )
                const quantity = document.getElementById(
                  `sd-quantityCheck${index}`
                );
                quantity.innerText = selectedProducts[index].length;
                sumOfVariants(selectedProducts, data);
                  if(!checkCartButtonActive(selectedProducts,data.response.bundleDetail.products)){
                console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
                  const getCartButton = document.getElementById("sd-builder-cart-info-add-btn")
               getCartButton.style.color = "red"
              }
                 if (
                data.response.bundleDetail.products[index].quantity ==
                selectedProducts[index].length
              ) {
                   
                   console.log("match")
                   document.getElementsByClassName("sd-bundle-CMM-main-Box"+index)[0].style.maxHeight = "0px"
              }
                 if(!checkCartButtonActive(selectedProducts,data.response.bundleDetail.products)){
                  const getCartButton = document.getElementById("sd-builder-cart-info-add-btn")
               getCartButton.style.background = "black"
               getCartButton.style.color = "white"
               getCartButton.style.cursor = "pointer"
               getCartButton.disabled = false
              }
              }
            });
          }
        });
        }else{
          console.log("empty")
          let emptyDiv = document.createElement("div")
          emptyDiv.className = "sd-builder-empty-conatiner"
          newDiv.append(emptyDiv)
          emptyDiv.innerText = "No products"
        }
          
       
      }
    });
  } 
  // // console.log("selectedProducts ===>", selectedProducts)
  let BUNDLE_BUILDER_INFO_DIV = document.createElement("div");
  BUNDLE_BUILDER_INFO_DIV.className = "sd-bundle-builder-info-container";
  mainContainer.append(BUNDLE_BUILDER_INFO_DIV);
  let INFO_DIV_ADDED_ITEM_TEXT = document.createElement("h5");
  INFO_DIV_ADDED_ITEM_TEXT.className = "sd-Info-Div-added-item-text";
  // console.log("akakak", data);
  INFO_DIV_ADDED_ITEM_TEXT.innerText =
    data.response.translations.translation.addedItems;
  BUNDLE_BUILDER_INFO_DIV.append(INFO_DIV_ADDED_ITEM_TEXT);
  let CART_INFO_CART_BODY = document.createElement("div");
  CART_INFO_CART_BODY.className = "sd-Builder-Cart-Info-Body";
  BUNDLE_BUILDER_INFO_DIV.append(CART_INFO_CART_BODY);
  let CART_INFO_CART_ACCORDIONS_DIV = document.createElement("div");
  CART_INFO_CART_ACCORDIONS_DIV.className =
    "sd-builder-Cart-Products-Accordions-container";
  CART_INFO_CART_BODY.append(CART_INFO_CART_ACCORDIONS_DIV);
  // // console.log("esssp", data.response.bundleDetail.products);
  data.response.bundleDetail.products.map((ele, subIndex) => {
    // // console.log(">>>><<<", subIndex)
    let productAccordionDiv = document.createElement("div");
    productAccordionDiv.className =
      "sd-builder-cart-info-product-accordion-box";
    CART_INFO_CART_ACCORDIONS_DIV.append(productAccordionDiv);
    let productAccordionHeading = document.createElement("div");
    productAccordionHeading.className = "sd-builder-accordion-header-box";
    productAccordionDiv.append(productAccordionHeading);

    let headingArrow = document.createElement("div");
    headingArrow.className = "sd-accordion-arrow";
    // headingArrow.classList.add("sd-accordion-active");
    // headingArrow.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="#5E5E5E" xmlns="http://www.w3.org/2000/svg"  style=" width: 24px; height: 24px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00025 16C7.74425 16 7.48825 15.902 7.29325 15.707C6.90225 15.316 6.90225 14.684 7.29325 14.293L11.5863 10L7.29325 5.70701C6.90225 5.31601 6.90225 4.68401 7.29325 4.29301C7.68425 3.90201 8.31625 3.90201 8.70725 4.29301L13.7073 9.29301C14.0983 9.68401 14.0983 10.316 13.7073 10.707L8.70725 15.707C8.51225 15.902 8.25625 16 8.00025 16Z" fill="current"></path></svg>`;
    productAccordionHeading.append(headingArrow);

    // productAccordionHeading.addEventListener("click", (e) => {
    //   if (productPanel.style.maxHeight == "500px") {
    //     productPanel.style.maxHeight = "0px";

    //     headingArrow.classList.remove("sd-accordion-active");
    //   } else {
    //     productPanel.style.maxHeight = "500px";
    //     headingArrow.classList.add("sd-accordion-active");
    //   }
    // });

    let headerCollectionName = document.createElement("span");
    headerCollectionName.className = "Sd-builder-accordion-heading-name";
    headerCollectionName.innerText = ele.title;
    productAccordionHeading.append(headerCollectionName);
    let variantCounterDiv = document.createElement("div");
    variantCounterDiv.className = "sd-builder-variant-counter-container";
    productAccordionHeading.append(variantCounterDiv);
    let variantCounter = document.createElement("span");
    let variantCounter1 = document.createElement("span");
    variantCounter.className = "sd-builder-variant-counter";
    variantCounter1.className = "sd-builder-variant-counter";
    console.warn(data);
    variantCounter.innerText = `/${ele.quantity} ${data.response.translations.translation.added}`;
    variantCounter1.innerText = "0";
    variantCounter1.id = `sd-quantityCheck${subIndex}`;
    variantCounterDiv.append(variantCounter1);
    variantCounterDiv.append(variantCounter);
    let productPanel = document.createElement("div");
    productPanel.className = "sd-builder-product-panel";
    // productPanel.style.maxHeight = "500px";
    // productPanel.style.paddingLeft = "30px";
    productAccordionDiv.append(productPanel);
    let noVariantDiv = document.createElement("div");
    noVariantDiv.id = "sd-builder-selectedProductContainer" + subIndex;
    productPanel.append(noVariantDiv);
    let innerDivContent;
    noVariantDiv.className = "sd-builder-no-Variant-container";

    innerDivContent = document.createElement("span");
    innerDivContent.className = "sd-builder-plus-icon-container";
    innerDivContent.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3999 10.8004H13.1999V3.60039C13.1999 2.93799 12.6635 2.40039 11.9999 2.40039C11.3363 2.40039 10.7999 2.93799 10.7999 3.60039V10.8004H3.5999C2.9363 10.8004 2.3999 11.338 2.3999 12.0004C2.3999 12.6628 2.9363 13.2004 3.5999 13.2004H10.7999V20.4004C10.7999 21.0628 11.3363 21.6004 11.9999 21.6004C12.6635 21.6004 13.1999 21.0628 13.1999 20.4004V13.2004H20.3999C21.0635 13.2004 21.5999 12.6628 21.5999 12.0004C21.5999 11.338 21.0635 10.8004 20.3999 10.8004Z" fill="#727272"></path></svg>`;

    noVariantDiv.append(innerDivContent);
    let noVariantText = document.createElement("span");
    noVariantText.className = "sd-builder-no-variant-text";
    noVariantText.innerText = "Please add products from collections";
    noVariantDiv.append(noVariantText);
    let variantDataDiv = document.createElement("div");
    variantDataDiv.id = "sd-builder-info-variants-data" + subIndex;
    variantDataDiv.classList.add("sd-info-variants-data");
    productPanel.append(variantDataDiv);
  });
  if (data.response.bundleDetail.discountType == "freeShipping") {
    let noShippingDiv = document.createElement("div");
    noShippingDiv.className = "sd-bundle-no-shopping-container";
    CART_INFO_CART_BODY.append(noShippingDiv);
    let shippingIcon = document.createElement("span");
    shippingIcon.className = "sd-bundle-shipping-icon";
    shippingIcon.innerHTML = `<svg viewBox="0 0 1024 1024" focusable="false" data-icon="shopping-cart" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path></svg>`;
    noShippingDiv.append(shippingIcon);
    let noShippingText = document.createElement("span");
    noShippingText.className = "sd-bundle-noShipping-text";
    noShippingText.innerText =
      data.response.translations.translation.FreeShipping;
    noShippingDiv.append(noShippingText);
  }
  let CART_INFO_ACTION_BOX = document.createElement("div");
  // console.log("sddedfe", data);

  CART_INFO_ACTION_BOX.className = "sd-builder-Cart-Info-Action-Box";
  CART_INFO_CART_BODY.append(CART_INFO_ACTION_BOX);
  let CART_INFO_TOTAL_DIV = document.createElement("div");
  CART_INFO_TOTAL_DIV.className = "sd-builder-total-container";
  CART_INFO_ACTION_BOX.append(CART_INFO_TOTAL_DIV);
  let totalText = document.createElement("span");
  totalText.className = "sd-builder-total-text";
  totalText.innerText = data.response.translations.translation.total;
  CART_INFO_TOTAL_DIV.append(totalText);
  let totalPriceText = document.createElement("span");
  totalPriceText.className = "sd-builder-total-ptice-container";
  CART_INFO_TOTAL_DIV.append(totalPriceText);
  let totalRawPrice = document.createElement("span");
  totalRawPrice.className = "sd-builder-total-raw-price";
  totalRawPrice.id = "sd-builder-total-raw-price";
  let newTotalPrice = sdCurrencySymbolCode.replace("{{amount}}", "0.00");

  totalRawPrice.innerText = newTotalPrice;
  totalPriceText.append(totalRawPrice);
  let totalDiscountedPrice = document.createElement("span");
  totalDiscountedPrice.className = "sd-builder-total-discounted-price";
  totalDiscountedPrice.id = "sd-builder-total-discounted-price-text";
  totalDiscountedPrice.innerText = "";
  totalPriceText.append(totalDiscountedPrice);
  let CART_INFO_ADD_BTN_div = document.createElement("div");
  CART_INFO_ADD_BTN_div.ClassName = "sd-builder-add-btn-container";
  CART_INFO_ACTION_BOX.append(CART_INFO_ADD_BTN_div);
  let cartAddBtn = document.createElement("button");
  cartAddBtn.className = "sd-builder-cart-info-add-btn";
  cartAddBtn.id = "sd-builder-cart-info-add-btn";
  cartAddBtn.style.cursor = "no-drop"
  cartAddBtn.disabled = true
  let newtPrice = sdCurrencySymbolCode.replace(
    "{{amount}}",
    data.response.bundleDetail.discountValue
  );

  let t =
    data.response.bundleDetail.discountType == "percent"
      ? data.response.bundleDetail.discountValue + "%"
      : data.response.bundleDetail.discountType == "fixed"
      ? newtPrice + " " + "Off"
      : "";

  cartAddBtn.innerText = data.response.translations.translation.addToCartButton;
  CART_INFO_ADD_BTN_div.append(cartAddBtn);

  cartAddBtn.addEventListener("click", (e) => {

            if(!checkCartButtonActive(selectedProducts,data.response.bundleDetail.products)){
              console.log("true",checkCartButtonActive(selectedProducts,data.response.bundleDetail.products))
              
    cartAddBtn.innerText = "";
    let BundleBuilderSpinner = document.createElement("div");
    BundleBuilderSpinner.className = "bundleBtnSpinner";
    BundleBuilderSpinner.style.display = "block";
    cartAddBtn.append(BundleBuilderSpinner);

    let idArray = [];
    let variantGid = [];
    for (const category of selectedProducts) {
      // Loop through the inner array of each category
      for (const product of category) {
        // Push the ID of each product to the idArray
        idArray.push({
          id: product.id.replace("gid://shopify/ProductVariant/", ""),
          quantity: 1,
        });
        variantGid.push(product.id);
      }
    }
    // // console.log(idArray)

    let formData = {
      items: idArray,
       attributes:{"SD_BUNDLE_ID":data.response._id}
    };
    fetch(window.Shopify.routes.root + "cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // // console.log("POST CART/ADD.JS=>",response);
        let errorDiv = document.getElementsByClassName(
          "sd-bundle-error-message"
        );
        errorDiv[0]?.remove();
        if (response.status == 422 || response.status == 404) {
          cartAddBtn.innerText =
            data.response.translations.translation.addToCartButton;
          BundleBuilderSpinner.remove();
          let errorMessage = document.createElement("div");
          errorMessage.className = "sd-bundle-error-message";
          CART_INFO_ADD_BTN_div.append(errorMessage);
          // // console.log(response.description);
          errorMessage.innerText = response.description;
        } else {
          // // console.log(response);

          fetch(window.Shopify.routes.root + "cart.js", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              console.log("here")
             if(data.response.bundleDetail.discountType == "noDiscount"){
               console.log("no discount")
                fetch(`${server}/api/storefront/getBundleClick`,{
                        method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      shop: Shopify.shop,
                      bundleId:data.response._id
                    }),
                      })
               console.log("data",data)
               let isDiscount =  data.response.bundleDetail.discountType == "noDiscount" ? "noDiscount" : "Fix"
               console.log(isDiscount)
               
                   let sd_bundle_data = {
                      discount_name: data.response.name,
                      code: data.response.settings.discountLabel,
                      bundleId : data.response._id,
                      discountType: isDiscount,
                      variantsId: idArray,
                      discountCreateId:"",
                    };
               console.log(sd_bundle_data)
                    var jsonString = JSON.stringify(sd_bundle_data);
                    localStorage.setItem("sd_bundle_data", jsonString);
               
                    BundleBuilderSpinner.remove();
                   cartAddBtn.innerText =
                      data.response.translations.translation.addToCartButton;
                      window.location.assign(`https://${Shopify.shop}/cart`);
               
             }else{
                let totalPrice = Number(pageInfoTotalPrice.toFixed(2));
              let finalPrice;
              switch (data.response.bundleDetail.discountType) {
                case "percent":
                  let percentagepart = parseFloat(
                    data.response.bundleDetail.discountValue
                  );
                  let percentage = (totalPrice * percentagepart) / 100;
                  result = pageInfoTotalPrice - percentage;
                  finalPrice = result.toFixed(2);
                  break;
                case "price":
                  let pricePart = parseFloat(
                    data.response.bundleDetail.discountValue
                  );
                  result = totalPrice - pricePart;
                  finalPrice = result.toFixed(2);
                  break;
                case "fixed":
                  let fixedPart = parseFloat(
                    data.response.bundleDetail.discountValue
                  );
                  finalPrice = fixedPart.toFixed(2);
                  break;
                default:
                  // // console.log("how are you ?");
                  break;
              }

              
              let isDiscount =  data.response.bundleDetail.discountType == "noDiscount" ? "noDiscount" : "Fix"
              let sd_bundle_data = {
                discount_name: data.response.name,
                code: data.response.settings.discountLabel ,
                discountType: isDiscount,
                discountValue: finalPrice,
                variantsId: variantGid,
                startDate: data.response.startdate,
                endDate: data.response.endDate,
                shop: Shopify.shop,
                bundleType: data.response.bundleDetail.discountType,
                totalPrice: totalPrice,
              };

              fetch(server + "/api/storefront/createRule", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(sd_bundle_data),
              })
                .then((response) => response.json())
                .then((res) => {
                  console.log("CREATE RULE",res)
                  if (res.status == 200) {
                    console.log("hafwejhbjkerhfjkhfjkh", data.response._id)
                      fetch(`${server}/api/storefront/getBundleClick`,{
                        method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      shop: Shopify.shop,
                      bundleId: data.response._id
                    }),
                      })
                    cartAddBtn.innerText =
                      data.response.translations.translation.addToCartButton;
                    BundleBuilderSpinner.remove();
                    // console.log("res", res);
                    // console.log("resposne", response);
                   
                    let sd_bundle_data = {
                      discount_name: data.response.name,
                      code: data.response.settings.discountLabel ,
                      bundleId : data.response._id,
                      discountType: isDiscount,
                      variantsId: idArray,
                      discountCreateId: res.response,
                    };
                    var jsonString = JSON.stringify(sd_bundle_data);
                    localStorage.setItem("sd_bundle_data", jsonString);
                    window.location.assign(`https://${Shopify.shop}/cart`);
                  }
                });
             }



              
             
              // .catch((err) => console.error(err));
            })
            .catch((error) => {
              // // console.log(error);
            });
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
              }
  });
}

// function addselectedProductList(selectedProducts, mainIndex, extra, arr1) {
function addselectedProductList(selectedProducts, mainIndex, extra,data) {
  console.log("ENTER IN CREATING HTML FOR LIST")
  // console.log("params[mainIndex]", selectedProducts[mainIndex]);
   console.log("mainIndex", mainIndex)
  console.log("params[mainIndex]", selectedProducts);
  if (selectedProducts[mainIndex].length) {
    if (extra == "") {
      // console.log("EMTER IN THE DELETE");
      document.getElementById(
        "sd-builder-selectedProductContainer" + mainIndex
      ).style.display = "none";
    }
    const getDiv = document.getElementById(
      "sd-builder-info-variants-data" + mainIndex
    );
    let listDiv;
    let listDivParent = '';
    listDivParent = document.createElement("div")

    selectedProducts[mainIndex].map((el, index) => {
      // console.log("INSIDE LOOP", el)
      // console.log("Varient Creating div");
      listDiv = document.createElement("div");
      listDiv.className = "sd-builder-info-selected-products";
      listDiv.id = "sd-builder-info-selected-products" + index;
      let selectedProductImgDiv = document.createElement("div");
      selectedProductImgDiv.className = "sd-builder-info-product-img-container";
      listDiv.append(selectedProductImgDiv);
      let selectedProductImg = document.createElement("img");
      selectedProductImg.className = "sd-builder-info-product-img";
      let selectedCartImg =  el.image ?? smartNoImg
      selectedProductImg.setAttribute("src", selectedCartImg);
      selectedProductImgDiv.append(selectedProductImg);
      let selectedProductTitleDiv = document.createElement("div");
      listDiv.append(selectedProductTitleDiv);
      let ProductTitle = document.createElement("div");
      ProductTitle.className = "sd-builder-info-product-title";
      ProductTitle.innerText = el.title;
      selectedProductTitleDiv.append(ProductTitle);
      let productVariantTitle = document.createElement("div");
      productVariantTitle.className = "sd-builder-info-variant-title";
      productVariantTitle.innerText = el.variantTitle;
      selectedProductTitleDiv.append(productVariantTitle);
      let removeVariant = document.createElement("button");
      removeVariant.innerText = "Delete";
      removeVariant.className = "sd-removeVariant-btn";
      removeVariant.id = `sd-removeVariant-btn-id${index}`;
      // removeVariant.innerHTML = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="variant_icon__bBPyr"><path d="M5 1.99388C5 0.892691 5.89543 0 7 0C8.10457 0 9 0.892691 9 1.99388H13C13.5523 1.99388 14 2.44023 14 2.99082C14 3.54142 13.5523 3.98776 13 3.98776H1C0.447716 3.98776 0 3.54142 0 2.99082C0 2.44023 0.447715 1.99388 1 1.99388H5Z" fill="#5E5E5E"></path><path d="M2 12.5076V6H4V12.5076C4 12.7829 4.22386 13.0061 4.5 13.0061H6V6H8L8 13.0061H9.5C9.77614 13.0061 10 12.7829 10 12.5076V6H12V12.5076C12 13.8841 10.8807 15 9.5 15H4.5C3.11929 15 2 13.8841 2 12.5076Z" fill="#5E5E5E"></path></svg>`

      listDiv.append(removeVariant);
     
     
      listDivParent.append(listDiv);

      removeVariant.addEventListener("click", () => {
       console.log("delete click texst 1 --")
        selectedProducts[mainIndex].splice(index, 1);
        const revDiv = document.getElementById(
          "sd-builder-info-selected-products" + index
        );
        // revDiv.remove();
        console.log("aksay", data)
       
        const countDiv = document.getElementById(`sd-quantityCheck${mainIndex}`)
        countDiv.innerText = selectedProducts[mainIndex].length
    
        getDiv.innerHTML =""
                  const getCartButton = document.getElementById("sd-builder-cart-info-add-btn")
       
        getCartButton.style.color = "#919191"
        getCartButton.style.background = "#e5e5e5"
        getCartButton.style.cursor = "no-drop"
        getCartButton.disabled  = true
        // addselectedProductList(selectedProducts, mainIndex,"", arr1)
        addselectedProductList(selectedProducts, mainIndex,"",data)
         // sumOfVariants(selectedProducts, data);
       
        
         sumOfVariants(selectedProducts, data);
        
      });
      
    });
    getDiv.appendChild(listDivParent);
    

  } else {
    document.getElementById(
      "sd-builder-selectedProductContainer" + mainIndex
    ).style.display = "block";
  }
}

function sumOfVariants(params, data) {
console.log("aksahy ",data)
console.log("param ",params)
  
  let sum = 0;

  for (const nestedArray of params) {
    for (const obj of nestedArray) {
      sum += parseFloat(obj.price);
    }
  }
  const updateSum = document.getElementById("sd-builder-total-raw-price");
  updateSum.innerText = "Rs." + sum.toFixed(2);
  console.log("summmm hai----",sum)
   let totalDiv = document.getElementById("sd-builder-total-discounted-price-text");
  if (sum > 0) {
     console.log("isme bhi jaa raha hai 21", data)
    let discountedPrice;
    if (data.response.bundleDetail.discountType == "percent") {
      console.log("jaa raha hai")
      let part = parseFloat(data.response.bundleDetail.discountValue);
      let percentage = (sum * part) / 100;
      result = sum - percentage;
      discountedPrice = result.toFixed(2);
      let newDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        discountedPrice
      );
      totalDiv.innerText = newDiscountPrice;
    } else if (data.response.bundleDetail.discountType == "fixed") {
      let part = parseFloat(data.response.bundleDetail.discountValue);
      let fixed = sum - part;
      discountedPrice = fixed.toFixed(2);
      let newDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        discountedPrice
      );
      totalDiv.innerText = newDiscountPrice;
    } else if (data.response.bundleDetail.discountType == "price") {
      let part = parseFloat(data.response.bundleDetail.discountValue);
      discountedPrice = part;
      let newDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        discountedPrice
      );

      totalDiv.innerText = newDiscountPrice;
    } else if (data.response.bundleDetail.discountType == "freeShipping") {
      totalDiv?.remove();
    } else if (data.response.bundleDetail.discountType == "noDiscount") {
      totalDiv?.remove();
    }

    pageInfoTotalPrice = sum;
  }else{
    console.log("zero0000000000000")
     let newDiscountPrice = sdCurrencySymbolCode.replace(
        "{{amount}}",
        0
      );
    totalDiv.innerText = newDiscountPrice;
  }
}
// sd-builder-cart-info-add-btn
  function checkCartButtonActive(arr1, arr2){
    let t = []
for (let i = 0; i < arr1.length; i++) {
        if(arr1[i].length == arr2[i].quantity){
            t.push(1)
        }else{
            t.push(0)
        }
}
    const v = t.includes(0)
    return v
  }

function waterMark(appendDiv){
 
   let waterMarkDiv = document.createElement("div");
      waterMarkDiv.className = "sd-bundle-WaterMark-conatiner";
      let sd_link = document.createElement("a");
      sd_link.innerText = "Shine Dezign Infonet";
      sd_link.setAttribute("href", "https://shinedezigninfonet.com/");
      sd_link.target = "_blank"
      waterMarkDiv.innerText = "Powered by ";
      waterMarkDiv.append(sd_link);
      appendDiv.append(waterMarkDiv);
  return waterMarkDiv ;
}

async function addDiscountToProduct(){
  console.log("ADDDD TO DISCOUNT FUNCTION")
   const localData = JSON.parse(localStorage.getItem("sd_bundle_data"));
  let checkOutBtn = document.getElementsByName("checkout");
  checkOutBtn.forEach((e)=>{
  e.addEventListener('click',(event)=>{
    event.preventDefault();
     fetch(window.Shopify.routes.root + "cart.js",{
      method : "Get",
      headers : {
        "Content-Type" : "application/json"
      },
    }).then((response)=>{
      return response.json()
    }).then((response)=>{
      console.log("cart js data",response)
       let allIdsMatch = localData.variantsId.every((item)=>{
         let matchingItem = response.items.find((i)=>i.id === parseInt(item.id) && item.quantity <= i.quantity);
         return !!matchingItem
       })
     
        if(allIdsMatch == true){
          /*here are true id match */
            activateRule(localData)
           let productVariantIds  = response.items.map(obj => {
            return `${obj.id}:${obj.quantity}`;
              });
          const attributes_url = Object.entries(response.attributes)
    .map(([key, value]) => `attributes[${key}]=${encodeURIComponent(value)}`)
    .join('&');

          window.location.href = `${window.location.origin}/cart/${productVariantIds}?discount=${localData.code}&${attributes_url}`
        }else{
        /*here are false id match */
          deactivateRule(localData)
           window.location.href =  `${window.location.origin}/cart/checkout`
        }
       
    }).catch((error)=>{
       console.log(error.message)
    })
 
  })   
  })
}
async function activateRule (localData){
  console.log("AAAAAAAACCCCCCTIVE")
  const data = {
    shop:Shopify.shop,
    discountId : localData.discountCreateId,
  };
  await fetch(server + "/api/storefront/activateRule",{
    method:"POST",
    headers :{
      "Content-Type" :  "application/json",
    },
    body:JSON.stringify(data)
  }).then((response)=>{
    return response.json();
  }).then((response)=>{
            let discountElement = document.getElementById("shineBundleDiscount");
          if (discountElement == null) {
            const inputElement = document.createElement("input");

            // Step 3: Set attributes for the input element
            inputElement.className = "js-form-discount shine-discount";
            inputElement.id = "shineBundleDiscount";
            inputElement.type = "hidden";
            inputElement.name = "discount";
            inputElement.value = localData.code;
            let formDiv = document.querySelectorAll('form[action="/cart"]');
            formDiv.forEach((form)=>{
              form.append(inputElement)
            })
         
            
          }
  }).catch((error)=>{
    console.log(error.message)
  })
}
async function deactivateRule (localData){
  console.log("DDEEEEAAAAAAAACCCCCCTIVE")
  const data = {
    shop:Shopify.shop,
    discountId : localData.discountCreateId,
  };
  await fetch(server + "/api/storefront/deactivateRule",{
    method:"POST",
    headers :{
      "Content-Type" :  "application/json",
    },
    body:JSON.stringify(data)
  }).then((response)=>{
    return response.json();
  }).then((response)=>{
            let discountElement = document.getElementById("shineBundleDiscount");
          if (discountElement !== null) {
          discountElement.remove();
          }
  }).catch((error)=>{
    console.log(error.message)
  })
}