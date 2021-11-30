import React from 'react';

import { Stack, Heading } from '@chakra-ui/react';
import { useAuth } from '../../../../hooks/useAuth';

export const Main: React.FC = () => {

  const { user } = useAuth();

  return (
    <Stack
      w="100vw"
      h="100vh"
      p="1rem" 
      pl="5rem"
      spacing="10rem"
    > 
      <Heading>
        Seja bem vindo, {user?.name}!
      </Heading>

      <form>

      </form>
    </Stack>
  );
}














// const [img, setImg] = useState('');
// const [imgSelected, setImgSelected] = useState('');

// const handleImg = async (e: any) => {
//   if(imgSelected !== '') {
//     var desertRef = storage.ref().child(imgSelected);
//     await desertRef.delete();
//     setImgSelected('');
//   }

//   if(e.target.files[0]){
//     const uploadTask = storage.ref(`audios/${Date.now()}`).put(e.target.files[0]);
//     uploadTask.on('state_changed', function(snapshot){
//     }, function(error) {
//       alert('error');

//     }, function() {
//         uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//           setImgSelected(uploadTask.snapshot.ref.fullPath);
//           setImg(downloadURL);
//       });
//     });
//   };
// };