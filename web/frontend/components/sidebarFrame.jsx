import React, { useState, useCallback, useEffect } from "react";
import {
  AppProvider,
  Frame,
  Navigation,
  TopBar,
  Button,
  Icon,
} from "@shopify/polaris";
import {
  HomeMajor,
  SettingsMajor,
  AnalyticsMajor,
  MaximizeMajor,
  MinimizeMajor,
  InviteMinor,
  PlanMajor,
  PackageMajor,
  ThemesMajor,
  CircleInformationMajor

} from "@shopify/polaris-icons";

import { useNavigate } from "@shopify/app-bridge-react";
import { Outlet, useLocation } from "react-router-dom";
import { Fullscreen } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";
import smartLogo from "../assets/smart-logo.png"

function CommonFrame() {
  const param = useLocation();
  const [fullScreen, setFullScreen] = useState(false);
  const [activeMenu, setActiveMenu] = useState([
    { selected: true, id:  0 },
    { selected: false, id: 1 },
    { selected: false, id: 2 },
    { selected: false, id: 3 },
    { selected: false, id: 4 },
    { selected: false, id: 5 },
    { selected: false, id: 6 },
    { selected: false, id: 7 },
  ]);

  const app = useAppBridge();
  const fullscreen = Fullscreen.create(app);
  const navigate = useNavigate();

useState(()=>{
  // if(param.pathname == "/customization"){
  //   setActiveMenu([{ selected: false, id: 1 },
  //     { selected: false, id: 2 },
  //     { selected: false, id: 3 },
  //     { selected: false, id: 4 },
  //     { selected: true, id: 5 },
  //     { selected: false, id: 6 },
  //     { selected: false, id: 7 },])
  // }
  switch (param.pathname) {
    case "/":
      setActiveMenu([
        { selected: true,  id:0 },
        { selected: false, id:1 },
        { selected: false, id:2 },
        { selected: false, id:3 },
        { selected: false, id:4 },
        { selected: false, id:5 },
        { selected: false, id:6 },
        { selected: false, id:7 },

      ])
      break;
      case "/bundle":
        setActiveMenu([
          { selected: false, id: 0 },
          { selected: true, id:  1 },
          { selected: false, id: 2 },
          { selected: false, id: 3 },
          { selected: false, id: 4 },
          { selected: false, id: 5 },
          { selected: false, id: 6 },
          { selected: false, id: 7 },
           
        ])
        break;
        case "/analytics":
          setActiveMenu([
            { selected: false, id:0 },
            { selected: false, id:1 },
            { selected: true, id: 2 },
            { selected: false, id:3 },
            { selected: false, id:4 },
            { selected: false, id:5 },
            { selected: false, id:6 },
            { selected: false, id:7 },
  
          ])
          break;
          case "/settings":
            setActiveMenu([
              { selected: false, id: 0 },
              { selected: false, id: 1 },
              { selected: false, id: 2 },
              { selected: true, id:  3 },
              { selected: false, id: 4 },
              { selected: false, id: 5 },
              { selected: false, id: 6 },
               { selected: false,id: 7 },

            ])
            break;
            case "/customization" || "/Customization":
              setActiveMenu([
                { selected: false, id: 0 },
                { selected: false, id: 1 },
                { selected: false, id: 2 },
                { selected: false, id: 3 },
                { selected: true, id:  4 },
                { selected: false, id: 5 },
                { selected: false, id: 6 },
               { selected: false, id:  7 },

              ])
              break;
              case "/plans":
                setActiveMenu([
                  { selected: false, id: 0 },
                  { selected: false, id: 1 },
                  { selected: false, id: 2 },
                  { selected: false, id: 3 },
                  { selected: false, id: 4 },
                  { selected: true, id:  5 },
                  { selected: false, id: 6 },
               { selected: false, id:    7 },

                ])
                break;
              case "/contact":
                setActiveMenu([
                  { selected: false, id:0},
                  { selected: false, id:1},
                  { selected: false, id:2},
                  { selected: false, id:3},
                  { selected: false, id:4},
                  { selected: false, id:5},
                  { selected: true, id: 6},
                  { selected: false, id:7},

                ])
                break;
    default:
      break;
  }
},[])



  const menu = [
    {
      label: "Dashboard",
      icon: HomeMajor,
      onClick: () => {
        handleClick("/", 0);
      },
      selected: activeMenu[0].selected,
    },
    {
      label: "Bundles ",
      icon: PackageMajor,
      onClick: () => {
        handleClick("/bundle", 1);
      },
      selected: activeMenu[1].selected,
    },
  

    {
      label: "Analytics",
      icon: AnalyticsMajor,
      selected: activeMenu[2].selected,
      onClick: () => {
        handleClick("/analytics", 2);
      },
    },
    {
      label: "Settings",
      icon: SettingsMajor,
      onClick: () => {
        handleClick("/settings", 3);
      },
      selected: activeMenu[3].selected,
    },
    {
      label: "Customization",
      icon: ThemesMajor,
      onClick: () => {
        handleClick("/Customization", 4);
      },
      selected: activeMenu[4].selected,
    },
   
    {
      label: "Plans",
      icon:   PlanMajor,
      onClick: () => {
        handleClick('/plans', 5);
      },
      selected: activeMenu[5].selected,
    },
     {
      label: "Contact us",
      icon:   InviteMinor,
      onClick: () => {
        handleClick('/contact', 6);
      },
      selected: activeMenu[6].selected,
    },
    {
      label: "FAQ",
      icon:   CircleInformationMajor,
      onClick: () => {
        handleClick('/faq', 7);
      },
      selected: activeMenu[7].selected,
    },
  ];

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    []
  );
    

  useEffect(() => {
    const fullPage = sessionStorage.getItem("full_screen");


    if (fullPage == "enter") {
      fullscreen.dispatch(Fullscreen.Action.ENTER);
      setFullScreen(true);
    }
  }, []);

  useEffect(() => {
   
    if(param.pathname == "/bundleCustomization"){
      fullscreen.dispatch(Fullscreen.Action.ENTER);
      setFullScreen(true);
    }else{
      fullscreen.dispatch(Fullscreen.Action.EXIT);
      setFullScreen(false);
    }
  }, []);
  // const toggleModalActive = useCallback(
  //   () => setModalActive((modalActive) => !modalActive),
  //   [],
  // );

  // const contextualSaveBarMarkup = isDirty ? (
  //   <ContextualSaveBar
  //     message="Unsaved changes"
  //     saveAction={{
  //       onAction: handleSave,
  //     }}
  //     discardAction={{
  //       onAction: handleDiscard,
  //     }}
  //   />
  // ) : null;

  const handleFullScreen = () => {
    const fullPage = sessionStorage.getItem("full_screen");
    // const fullscreen = Fullscreen.create(app);
    if (fullPage == "enter") {
      sessionStorage.setItem("full_screen", "exit");
      fullscreen.dispatch(Fullscreen.Action.EXIT);
      setFullScreen(false);
    } else {
      sessionStorage.setItem("full_screen", "enter");
      fullscreen.dispatch(Fullscreen.Action.ENTER);
      setFullScreen(true);
    }
  };

  const userMenuMarkup = (
    <div className="sd-bundle-fullScreen-button">
      <Button primary onClick={handleFullScreen}>
        <Icon source={fullScreen == true ? MinimizeMajor : MaximizeMajor} />
      </Button>
    </div>
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const handleClick = (location, index) => {
    setActiveMenu((prevMenu) =>
      prevMenu.map((item, i) => ({
        ...item,
        selected: i === index ? true : false,
      }))
    );
    navigate(location);
  };


  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section items={menu} />
    </Navigation>
  );

  const logo = {
    width: 200,
    topBarSource:smartLogo,
    contextualSaveBarSource:smartLogo,
    accessibilityLabel: "smart_discount_bundle",
    url:"#"
   
  };

  return (
    <div style={{ height: "500px" }}>
      <AppProvider
        i18n={{
          Polaris: {
            Avatar: {
              label: "Avatar",
              labelWithInitials: "Avatar with initials {initials}",
            },
            ContextualSaveBar: {
              save: "Save",
              discard: "Discard",
            },
            TextField: {
              characterCount: "{count} characters",
            },
            TopBar: {
              toggleMenuLabel: "Toggle menu",

              SearchField: {
                clearButtonLabel: "Clear",
                search: "Search",
              },
            },
            Modal: {
              iFrameTitle: "body markup",
            },
            Frame: {
              // skipToContent: 'Skip to content',
              navigationLabel: "Navigation",
              Navigation: {
                closeMobileNavigationLabel: "Close navigation",
              },
            },
          },
        }}
      >
        <Frame
          logo={logo}
          topBar={topBarMarkup}
          // navigation={
          //   param.pathname.includes("/ProductBundle")  ||
          //   param.pathname.includes("/VolumeBundle") ||
          //   param.pathname.includes("collectionMixMatch")
          //     ? null
          //     : navigationMarkup
          // }
          navigation={navigationMarkup}
     
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
        >
          <Outlet />
        </Frame>
      </AppProvider>
    </div>
  );
}

export default CommonFrame;
