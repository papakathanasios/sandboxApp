import React from 'react';
import SandboxForm from './SandboxForm';


class CreateSandbox extends React.Component{
   
    constructor(props){
        super(props);
        //this.handleClick=this.handleClick.bind(this);
        this.clientIdChange=this.clientIdChange.bind(this);
        this.sandboxIdChange=this.sandboxIdChange.bind(this);  
        this.handleClick=this.handleClick.bind(this);  
        this.state= {
                'sandbox': {  
                    "payload":{  
                       "SandboxID":"000000",
                       "Users":[  
                          {  
                             "UserId":"645af800-8c97-4f47-b489-6b9d7b05b86d",
                             "Username":"User1",
                             "ProviderId":"NBG.gr",
                             "Provider":"NBG",
                             "SocialNetworkId":"b3660585-74ca-45cf-ba32-ec3e6c0268e8",
                             "MemberId":"fb0475c1-de25-44c2-aa8f-9661d4c88966"
                          },
                          {  
                             "UserId":"4f2b0290-0f71-4ee0-82ca-578db883be5e",
                             "Username":"User2",
                             "ProviderId":"NBG.gr",
                             "Provider":"NBG",
                             "SocialNetworkId":"b3660585-74ca-45cf-ba32-ec3e6c0268e8",
                             "MemberId":"a22b3871-89ef-43c3-8f4f-f16cdd09fa1c"
                          }
                       ],
                       "SocialNetworks":[  
                          {  
                             "SocialNetworkId":"b3660585-74ca-45cf-ba32-ec3e6c0268e8",
                             "SocialNetworkName":"NBG Social Network",
                             "SocialNetworkDescription":"NBG Social Network",
                             "SocialNetworkOwner":"Network Owner",
                             "Status":"Active",
                             "SocialNetworkMembers":[  
                                {  
                                   "MemberId":"fb0475c1-de25-44c2-aa8f-9661d4c88966",
                                   "ContactId":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                   "Status":"Active",
                                   "FirstName":"Γιώργος",
                                   "LastName":"Γεωργίου",
                                   "Alias":"Best Member",
                                   "Avatar":"",
                                   "IsVerified":true,
                                   "Identity":"6979876543",
                                   "IdentityType":"Mobile",
                                   "IdentityStatus":"Active",
                                   "SocialNetworkPosts":[  
                                      {  
                                         "PostId":"c58c9943-607c-435b-80dc-c59b2325b4c1",
                                         "Timestamp":"2018-06-23T16:37:21.625Z",
                                         "Content":"First post",
                                         "Status":"Posted",
                                         "SocialNetworkReactions":[  
                                            {  
                                               "ContactId":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                               "Timestamp":"2018-06-23T18:37:21.625Z",
                                               "Type":"Wow",
                                               "Status":"Active"
                                            }
                                         ]
                                      }
                                   ],
                                   "SocialNetworkMessages":[  
                                      {  
                                         "MessageId":"28bb7ac1-6db9-4d9e-b45f-df307c1e3a34",
                                         "Timestamp":"2018-06-21T19:37:21.625Z",
                                         "Source":"fb0475c1-de25-44c2-aa8f-9661d4c88966",
                                         "Destination":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                         "Content":"Γεια σου Αθανασία!",
                                         "Status":"Delivered",
                                         "SocialNetworkReactions":[  
                                            {  
                                               "ContactId":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                               "Timestamp":"2018-06-23T17:37:21.625Z",
                                               "Type":"Like",
                                               "Status":"Active"
                                            }
                                         ]
                                      },
                                      {  
                                         "MessageId":"93bca2da-bfc8-4f11-800a-eec1aa54784c",
                                         "Timestamp":"2018-06-23T18:37:21.625Z",
                                         "Source":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                         "Destination":"fb0475c1-de25-44c2-aa8f-9661d4c88966",
                                         "Content":"Γεια σου και εσένα Γιώργο! Συγνώμη για την αργοπορημένη απάντησή μου!",
                                         "Status":"Delivered",
                                         "SocialNetworkReactions":[  
                                            {  
                                               "ContactId":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                               "Timestamp":"2018-06-23T19:37:21.625Z",
                                               "Type":"Like",
                                               "Status":"Active"
                                            }
                                         ]
                                      }
                                   ],
                                   "SocialNetworkContacts":[  
                                      {  
                                         "ContactId":"bd255ab5-dc94-4d80-82e7-e58a156e2e9a",
                                         "Identity":"+6912345678",
                                         "IdentityType":"Mobile",
                                         "IdentityStatus":"Pending",
                                         "ContactStatus":"Uploaded",
                                         "ContactType":"Friend",
                                         "IsVerified":false,
                                         "MemberId":null
                                      },
                                      {  
                                         "ContactId":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                         "Identity":"6123654987",
                                         "IdentityType":"Mobile",
                                         "IdentityStatus":"Active",
                                         "ContactStatus":"Registered",
                                         "ContactType":"Colleague",
                                         "IsVerified":true,
                                         "MemberId":"a22b3871-89ef-43c3-8f4f-f16cdd09fa1c"
                                      }
                                   ]
                                },
                                {  
                                   "MemberId":"a22b3871-89ef-43c3-8f4f-f16cdd09fa1c",
                                   "ContactId":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                   "Status":"Active",
                                   "FirstName":"Αθανασία",
                                   "LastName":"Παπαφλέσσα",
                                   "Alias":"VIP Member",
                                   "Avatar":"",
                                   "IsVerified":true,
                                   "Identity":"6123654987",
                                   "IdentityType":"Mobile",
                                   "IdentityStatus":"Active",
                                   "SocialNetworkPosts":[  
                                      {  
                                         "PostId":"4728aecf-da13-4583-b055-5effcec02ad0",
                                         "Timestamp":"2018-06-23T17:37:21.625Z",
                                         "Content":"post!!",
                                         "Status":"Posted",
                                         "SocialNetworkReactions":[  
                                            {  
                                               "ContactId":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                               "Timestamp":"2018-06-23T18:37:21.625Z",
                                               "Type":"Wow",
                                               "Status":"Active"
                                            }
                                         ]
                                      }
                                   ],
                                   "SocialNetworkMessages":[  
                                      {  
                                         "MessageId":"93bca2da-bfc8-4f11-800a-eec1aa54784c",
                                         "Timestamp":"2018-06-23T18:37:21.625Z",
                                         "Source":"a22b3871-89ef-43c3-8f4f-f16cdd09fa1c",
                                         "Destination":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                         "Content":"Γεια σου και εσένα Γιώργο! Συγνώμη για την αργοπορημένη απάντησή μου!",
                                         "Status":"Delivered",
                                         "SocialNetworkReactions":[  
                                            {  
                                               "ContactId":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                               "Timestamp":"2018-06-23T19:37:21.625Z",
                                               "Type":"Like",
                                               "Status":"Active"
                                            }
                                         ]
                                      },
                                      {  
                                         "MessageId":"28bb7ac1-6db9-4d9e-b45f-df307c1e3a34",
                                         "Timestamp":"2018-06-21T19:37:21.625Z",
                                         "Source":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                         "Destination":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                         "Content":"Γεια σου Αθανασία!",
                                         "Status":"Delivered",
                                         "SocialNetworkReactions":[  
                                            {  
                                               "ContactId":"e6e0227b-9749-4887-9f3e-71030b0223e0",
                                               "Timestamp":"2018-06-23T17:37:21.625Z",
                                               "Type":"Like",
                                               "Status":"Active"
                                            }
                                         ]
                                      }
                                   ],
                                   "SocialNetworkContacts":[  
                                      {  
                                         "ContactId":"0b9ce379-50af-4d61-879e-4fb3c940869a",
                                         "Identity":"6979876543",
                                         "IdentityType":"Mobile",
                                         "IdentityStatus":"Active",
                                         "ContactStatus":"Registered",
                                         "ContactType":"Colleague",
                                         "IsVerified":true,
                                         "MemberId":"fb0475c1-de25-44c2-aa8f-9661d4c88966"
                                      }
                                   ]
                                }
                             ]
                          }
                       ]
                    },
                    "exception":null,
                    "messages":null,
                    "executionTime":0.0
                 },
                'showComponent':false,
                'sandboxId': '0',
                'clientId': '0'
            };
                      
	}


    sandboxIdChange(e) {
        this.setState({sandboxId: e.target.value});
     }
     clientIdChange(e) {
        this.setState({clientId: e.target.value});
     }
    handleClick(){
        fetch('https://apis.nbg.gr/partner/sandbox/socialnetwork.sandbox/v1/sandbox', { 
            method: 'post', 
            headers: new Headers({
              //'Authorization': 'Basic '+btoa('username:password'), 
              'accept':'text/json',
              'Content-Type': 'text/json',
              'x-ibm-client-id':'c8e16514-cb3d-48aa-9f48-a5817b43deeb'
              //'x-ibm-client-id':'\''+ this.state.clientId +'\''
            }),
            //body: '{"sandboxId":"44154717154146"}'
            body: '{"sandboxId":"' + this.state.sandboxId + '"}'
          }) .then(result=>result.json())
            
            .then(sandbox=>this.setState({sandbox})).then(this.setState({showComponent:true}));
    }
    
    // componentDidMount(){
    //     fetch('https://registry.npmjs.org/registry/')
    //     .then(result=>result.json())
    //     .then(items=>this.setState({items}));
    // }
    render(){
        return(
            <div>
            <p>Create Sandbox Page</p>
                <SandboxForm 
                handleClick={this.handleClick}
                sandboxIdChange={this.sandboxIdChange} 
                clientIdChange={this.clientIdChange} 
                sandboxId={this.state.sandboxId} 
                clientId={this.state.clientId}  
                sandboxstateid={this.state.sandbox.payload.SandboxID}
                />
            </div>
        );
    }
}

export default CreateSandbox;


