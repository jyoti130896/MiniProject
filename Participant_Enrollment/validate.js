
function validate()
{   if( document.ParticipantRegistration.participantId.value == "" )
   {
     alert( "Please provide your Id!" );
     document.ParticipantRegistration.participantId.focus() ;
     return false;
   } 

   if(document.ParticipantRegistration.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.ParticipantRegistration.textnames.focus() ;
     return false;
   } 
   if( document.ParticipantRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Programe" );
     
     return false;
   }
   return( true );
}