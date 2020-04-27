import React, { useState, useEffect } from 'react';

import { Container, Content, Question, CircleButton, Image, ImagePerfil , Next, Input, SelectPhoto } from './styles';

import { MdLocalSee } from 'react-icons/md';

import Button from '../../components/Button';
import HeaderPerfil from '../../components/HeaderPerfil';
import ProgressTracking from '../../components/ProgressTracking';
import camera from '../../assets/images/camera.png';


export default function Photography() {

	const [formState, setFormState] = useState({
    	file: '',
    	imagePreviewUrl: '',
  	});

  	function _handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {

	      setFormState({
          	...formState,
          	file: file,
        	});
	      setFormState({
          	...formState,
          	imagePreviewUrl: reader.result,
        	});	      
	    }

	    reader.readAsDataURL(file)
	}


	let imagePreviewUrl = formState.imagePreviewUrl
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
      		<ImagePerfil src={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (<Image src={camera}></Image>);
    }

	return (
		<Container>
			<HeaderPerfil></HeaderPerfil>
			<Content>
				<Question>
					{ imagePreviewUrl ? (<p><span>Ótimo!</span> Caso queira, você pode escolher outra foto ou alterar depois em seu perfil.</p>) : (<p>Para iniciar seu cadastro, é necessário ter uma <span>foto de perfil</span>.</p>) }
				</Question>
				<CircleButton>
					<Input className="fileInput" 
		            type="file" 
		            onChange={(e)=> _handleImageChange(e)} />
          			{$imagePreview}
          			{imagePreviewUrl ? (
          				<SelectPhoto>
      						<MdLocalSee size="32px" color="#FFF"/>
      					</SelectPhoto>
          			) : null}
				</CircleButton>
				<Button variant="contained" theme="third">
	          		Continuar
	        	</Button>
	        	<Next>Pular</Next>
	        	<ProgressTracking amount={7} position={1}/>
			</Content>
		</Container>
	)
}