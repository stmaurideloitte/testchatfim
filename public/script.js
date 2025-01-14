var sessionId = false;
var orgId = -1;
var userData = null;

var options_dev = {
  "org.id": "00D7Y000000BErs",
  "chat.src": "https://fulmineinmano--dev.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano--dev.sandbox.my.salesforce.com",
  "chat.agent.url": "https://dev-fulmineinmano--dev.cs173.force.com/liveAgentSetupFlow",
  "chat.logged.username": "Website_FIM_LoggedIn_User",
  "chat.logged.agentname": "EmbeddedServiceLiveAgent_Parent04I1X0000008PPgUAM_17d757bf263",
  "chat.guest.username": "Website_Prospect_FIM",
  "chat.guest.agentname": "Website_Prospect_FIM",
  "chat.base.liveagent.content.url": "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
  "chat.deployment.id": "5727Y000000GmeL",
  "chat.button.id.guest": "5737Y000000Kyqz",
  "chat.button.id.logged": "5737Y000000Kyqz",
  "chat.base.liveagent.url": "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
};
var options_devshared = {
  "org.id": "00D1X0000000Npj",
  "chat.src": "https://fulmineinmano--devshared.sandbox.my.salesforce.comorce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano--devshared.sandbox.my.salesforce.comorce.com",
  "chat.agent.url": "https://devshared-sf-liveagent.cs101.force.com/liveAgentSetupFlow",
  "chat.logged.username": "Website_FIM_LoggedIn_User",
  "chat.logged.agentname": "EmbeddedServiceLiveAgent_Parent04I1X0000008PPgUAM_17d757bf263",
  "chat.guest.username": "Website_Prospect_FIM",
  "chat.guest.agentname": "Website_Prospect_FIM",
  "chat.base.liveagent.content.url": "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
  "chat.deployment.id": "5721X0000004ECE",
  "chat.button.id.guest": "5731X0000004DHH",
  "chat.button.id.logged": "5731X0000004DHg",
  "chat.base.liveagent.url": "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
};
var options_uat = {
  "org.id": "00D7Y000000BENn",
  "chat.src": "https://fulmineinmano--uat.sandbox.my.salesforce.comorce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano--uat.sandbox.my.salesforce.comorce.com",
  "chat.agent.url": "https://uat-sf-liveagent.cs173.force.com/liveAgentSetupFlow",
  "chat.logged.username": "Website_FIM_LoggedIn_User",
  "chat.logged.agentname": "EmbeddedServiceLiveAgent_Parent04I1X0000008PPgUAM_17d757bf263",
  "chat.guest.username": "Website_Prospect_FIM",
  "chat.guest.agentname": "Website_Prospect_FIM",
  "chat.base.liveagent.content.url": "https://c.la1-c1cs-fra.salesforceliveagent.com/content",
  "chat.deployment.id": "5727Y000000Kyl7",
  "chat.button.id.guest": "5737Y000000Kyqa",
  "chat.button.id.logged": "5737Y000000Kyr4",
  "chat.base.liveagent.url": "https://d.la1-c1cs-fra.salesforceliveagent.com/chat",
};
var options_prod = {
  "org.id": "00D0900000AHGjn",
  "chat.src": "https://fulmineinmano.my.salesforce.com/embeddedservice/5.0/esw.min.js",
  "chat.base.url": "https://fulmineinmano.my.salesforce.com",
  "chat.agent.url": "https://fulmineinmano.my.salesforce-sites.com/liveAgentSetupFlow",
  "chat.logged.username": "Website_FIM_LoggedIn_User",
  "chat.logged.agentname": "EmbeddedServiceLiveAgent_Parent04I09000000gfRdEAI_18239d0c96a",
  "chat.guest.username": "Website_Prospect_FIM",
  "chat.guest.agentname": "Website_Prospect_FIM",
  "chat.base.liveagent.content.url": "https://c.la3-c2-fra.salesforceliveagent.com/content",
  "chat.deployment.id": "57209000000gpB8",
  "chat.button.id.guest": "57309000000UT7z",
  "chat.button.id.logged": "57309000000gqKb",
  "chat.base.liveagent.url": "https://d.la3-c2-fra.salesforceliveagent.com/chat",
};

var options = {};

function init() {
  console.log("VERSION:\t2");
  var url_string = window.location.href;
  var url = new URL(url_string);
  var sessionId = url.searchParams.get("sessionId");
  if (sessionId) {
    //let userData = $.fim.private.accountDetails;
    userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@salesforce.com",
    };
  } else {
    userData = null;
  }
  document.getElementById("sessionId").checked = sessionId == "true";
  var orgId = Number(url.searchParams.get("orgId"));
  if (orgId == 0 || orgId == -1) {
    orgId = 1;
  }
  document.getElementById("orgId").value = orgId;
  switch (orgId) {
    case 1:
      console.log("ENV:\t\tDEV");
      options = options_dev;
      break;
    case 2:
      console.log("ENV:\t\tDEVSHARED");
      options = options_devshared;
      break;
    case 3:
      console.log("ENV:\t\tUAT");
      options = options_uat;
      break;
    case 4:
      console.log("ENV:\t\tPROD");
      options = options_prod;
      break;
  }
  if (!window.embedded_svc) {
    var s = document.createElement("script");
    s.setAttribute("src", options["chat.src"]);
    s.onload = function () {
      initESW(null);
    };
    document.body.appendChild(s);
  } else {
    initESW("https://service.force.com");
  }
}

function getUrl(name, value) {
  _url = location.href.toString();
  let re = new RegExp("([?&])" + name + "=.*?(&|#|$)", "i");
  if (_url.match(re)) {
    return _url.replace(re, "$1" + name + "=" + value + "$2");
  } else {
    let hash = "";
    if (_url.indexOf("#") !== -1) {
      hash = _url.replace(/.*#/, "#");
      _url = _url.replace(/#.*/, "");
    }
    let separator = _url.indexOf("?") !== -1 ? "&" : "?";
    return _url + separator + name + "=" + value + hash;
  }
}

function setSessionIdPressed(checkbox) {
  sessionId = checkbox.checked;
  var url = getUrl("sessionId", sessionId);
  window.location.href = url;
}

function setOrgIdPressed(combobox) {
  orgId = combobox.value;
  var url = getUrl("orgId", orgId);
  window.location.href = url;
}

function initESW(gslbBaseURL) {
  embedded_svc.settings.displayHelpButton = true;
  embedded_svc.settings.language = "it"; //For example, enter 'en' or 'en-US'
  embedded_svc.settings.enabledFeatures = ["LiveAgent"];
  embedded_svc.settings.entryFeature = "LiveAgent";

  if (!userData) {
    // Guest User
    console.log("USER:\t\tGuest");
    embedded_svc.settings.extraPrechatFormDetails = [
      {
        label: "Subj",
        value: "Chat con Ospite",
        displayToAgent: true,
      },
      {
        label: "Sts",
        value: "New",
        displayToAgent: true,
      },
      {
        label: "Ogn",
        value: "Chat",
        displayToAgent: true,
      },
    ];
    embedded_svc.settings.extraPrechatInfo = [
      {
        entityName: "Account",
        saveToTranscript: "AccountId",
        entityFieldMaps: [
          {
            fieldName: "PersonEmail",
            label: "Email",
            doCreate: false,
            doFind: true,
            isExactMatch: true,
          },
        ],
      },
      {
        entityName: "Case",
        showOnCreate: true,
        saveToTranscript: "CaseId",
        entityFieldMaps: [
          {
            fieldName: "Subject",
            label: "Sbj",
            doCreate: true,
            doFind: false,
            isExactMatch: false,
          },
          {
            fieldName: "Status",
            label: "Sts",
            doCreate: true,
            doFind: false,
            isExactMatch: false,
          },
          {
            fieldName: "Origin",
            label: "Ogn",
            doCreate: true,
            doFind: false,
            isExactMatch: false,
          },
        ],
      },
    ];
    // Website_Guest
    embedded_svc.init(
      options["chat.base.url"],
      options["chat.agent.url"],
      gslbBaseURL,
      options["org.id"],
      options["chat.guest.username"],
      {
        baseLiveAgentContentURL: options["chat.base.liveagent.content.url"],
        deploymentId: options["chat.deployment.id"],
        buttonId: options["chat.button.id.guest"],
        baseLiveAgentURL: options["chat.base.liveagent.url"],
        eswLiveAgentDevName: options["chat.guest.agentname"],
        isOfflineSupportEnabled: true,
      }
    );
  } else {
    // User Logged In
    console.log("USER:\t\tLogged In");
    // Prepopulate details
    embedded_svc.settings.prepopulatedPrechatFields = {
      FirstName: userData.firstName,
      LastName: userData.lastName,
    };
    embedded_svc.settings.extraPrechatFormDetails = [
      {
        name: "FirstName", // Form link
        label: "First Name",
        value: userData.firstName,
        displayToAgent: true,
      },
      {
        name: "LastName", // Form link
        label: "Last Name",
        value: userData.lastName,
        displayToAgent: true,
      },
      {
        name: "Email", // Form link
        label: "Email",
        value: userData.email,
        displayToAgent: true,
      },
      {
        label: "Subj",
        value: "Chat con Cliente",
        displayToAgent: true,
      },
      {
        label: "Sts",
        value: "New",
        displayToAgent: true,
      },
      {
        label: "Ogn",
        value: "Chat",
        displayToAgent: true,
      },
    ];
    // Link Contact, Account, Case
    embedded_svc.settings.extraPrechatInfo = [
      {
        entityName: "Contact",
        saveToTranscript: "ContactId",
        linkToEntityName: "Case",
        linkToEntityField: "ContactId",
        entityFieldMaps: [
          {
            fieldName: "Email",
            label: "Email",
            doCreate: false,
            doFind: true,
            isExactMatch: true,
          },
        ],
      },
      {
        entityName: "Account",
        saveToTranscript: "AccountId",
        linkToEntityName: "Case",
        linkToEntityField: "AccountId",
        entityFieldMaps: [
          {
            fieldName: "PersonEmail",
            label: "Email",
            doCreate: false,
            doFind: true,
            isExactMatch: true,
          },
        ],
      },
      {
        entityName: "Case",
        showOnCreate: true,
        saveToTranscript: "CaseId",
        linkToEntityName: "Account",
        entityFieldMaps: [
          {
            fieldName: "Subject",
            label: "Subj",
            doCreate: true,
            doFind: false,
            isExactMatch: false,
          },
          {
            fieldName: "Status",
            label: "Sts",
            doCreate: true,
            doFind: false,
            isExactMatch: false,
          },
          {
            fieldName: "Origin",
            label: "Ogn",
            doCreate: true,
            doFind: false,
            isExactMatch: false,
          },
        ],
      },
    ];
    // Website_LoggedIn
    embedded_svc.init(
      options["chat.base.url"],
      options["chat.agent.url"],
      gslbBaseURL,
      options["org.id"],
      options["chat.logged.username"],
      {
        baseLiveAgentContentURL: options["chat.base.liveagent.content.url"],
        deploymentId: options["chat.deployment.id"],
        buttonId: options["chat.button.id.logged"],
        baseLiveAgentURL: options["chat.base.liveagent.url"],
        eswLiveAgentDevName: options["chat.logged.agentname"],
        isOfflineSupportEnabled: true,
      }
    );
  }
}
