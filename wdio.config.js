exports.config = 
{
     runner : 'local',
     port : 4723,
     host : 'localhost',
     path : '/wd/hub',
     logLevel : 'info',
     framework : 'mocha',
     mochaOpts: 
     {
          ui: 'bdd',
          require: ['@babel/register'],
          timeout: 99999999
      },
      maxInstances : 1,
      sync : 'true',
      specs : [
           //'./api/login.js'
           './testPage/login.test.js'
      ],
      capabilities : [{
          "udid": "05199339B6010679",
          "appPackage": "com.wdiodemoapp",
          "appActivity": ".MainActivity",
          "platformName": "Android",
          "deviceName": "TECHNO-CC7"
      }],
      reporters: 
    [
        ['junit', 
        {
            outputDir: './reports',
            outputFileFormat: function(options)
            {
                return `OnlineShoppingresults.xml`
            }
        }],
        ['allure', 
           {
              outputDir : 'allure-results'
           }
        ]
    ],  
}