<div id="pianoroll-settings-container"> 
	<p class="settings-panel-title">Pianoroll settings</p>
	<div class="paragraph-divider no-margin"></div>
	<div class="settings-panel-section">
		<div class="setting-container">
			<p class="settings-label">Wave type</p> 
			<div class="settings-multichoice-container">
				<div class="settings-multichoice-option wave-type" 		id="sine" 			onclick="multichoice('wave-type','sine')" ><p class="settings-multichoice-option">Sine</p></div>
				<div class="settings-multichoice-option wave-type" 		id="sawtooth"  		onclick="multichoice('wave-type','sawtooth')" ><p class="settings-multichoice-option">Saw Tooth</p></div>
				<div class="settings-multichoice-option wave-type" 		id="square"  		onclick="multichoice('wave-type','square')" ><p class="settings-multichoice-option">Square</p></div>
				<div class="settings-multichoice-option wave-type" 		id="triangle"  		onclick="multichoice('wave-type','triangle')" ><p class="settings-multichoice-option">Triangle</p></div>
			</div>
		</div>
		<div class="setting-container">
			<p class="settings-label">Note Color</p>
			<div class="settings-multichoice-container">
				<div class="settings-multichoice-option midi-color" 	id="red" 			onclick="multichoice('midi-color','red')" ><p class="settings-multichoice-option">Red</p></div>
				<div class="settings-multichoice-option midi-color" 	id="blue" 			onclick="multichoice('midi-color','blue')" ><p class="settings-multichoice-option">Blue</p></div>
				<div class="settings-multichoice-option midi-color" 	id="purple" 		onclick="multichoice('midi-color','purple')" ><p class="settings-multichoice-option">Purple</p></div>
				<div class="settings-multichoice-option midi-color" 	id="green" 			onclick="multichoice('midi-color','green')" ><p class="settings-multichoice-option">Green</p></div>
				<div class="settings-multichoice-option midi-color" 	id="orange" 		onclick="multichoice('midi-color','orange')" ><p class="settings-multichoice-option">Orange</p></div>
			</div>
		</div>
		<div class="setting-container">
			<p class="settings-label">Stamp Chord</p>
			<div class="settings-multichoice-container">
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-1" 	onclick="multichoice('chord-stamp','chord-stamp-1')"><p class="settings-multichoice-option">Major</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-2"	onclick="multichoice('chord-stamp','chord-stamp-2')"><p class="settings-multichoice-option">Minor</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-3"	onclick="multichoice('chord-stamp','chord-stamp-3')"><p class="settings-multichoice-option">Sus2</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-4"	onclick="multichoice('chord-stamp','chord-stamp-4')"><p class="settings-multichoice-option">Sus4</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-5"	onclick="multichoice('chord-stamp','chord-stamp-5')"><p class="settings-multichoice-option">Augmented</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-6"	onclick="multichoice('chord-stamp','chord-stamp-6')"><p class="settings-multichoice-option">Major Seventh</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-7"	onclick="multichoice('chord-stamp','chord-stamp-7')"><p class="settings-multichoice-option">Minor Seventh</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-8"	onclick="multichoice('chord-stamp','chord-stamp-8')"><p class="settings-multichoice-option">Dominant Seventh</p></div>
				<div class="chord-stamp settings-multichoice-option"	id="chord-stamp-9"	onclick="multichoice('chord-stamp','chord-stamp-9')"><p class="settings-multichoice-option">Diminished</p></div>
				<div class="chord-stamp settings-multichoice-option" 	id="chord-stamp-0"  onclick="multichoice('chord-stamp','chord-stamp-0')"><p class="settings-multichoice-option">Off</p></div>

			</div>
		</div>
		<div class="setting-container">
			<p class="settings-label">Velocity <span class="settings-value">40</span></p>
			<input type="range" min="1" max="100" value="40" id="note-velocity" class="slider" onchange="" style="opacity: 1; pointer-events: auto;">
		</div>
		<div class="setting-container">
			<p class="settings-label">Duration <span class="settings-value" id="note-length-label">3</span>/<span class="settings-value snap-label">4</span></p>
			<input type="range" min="1" max="10" value="1" id="note-length" class="slider" onchange="sliderUpdate()" style="opacity: 1; pointer-events: auto;">

		</div>
		
	</div>

	<div class="settings-panel-section">
		<div class="setting-container">
			<p class="settings-label">Volume <span class="settings-value">89</span></p>
			<input type="range" min="1" max="100" value="89" id="master-volume" class="slider" onchange="" style="opacity: 1; pointer-events: auto;">
		</div>
		<div class="setting-container">
			<p class="settings-label">BPM <span class="settings-value" id="bpm-label">137</span></p>
			<input type="range" min="80" max="160" value="110" id="bpm" class="slider" onchange="" style="opacity: 1; pointer-events: auto;">
		</div>
		<div class="setting-container">
			<p class="settings-label">Snap <span class="settings-value snap-label">4</span></p>
			<input type="range" min="1" max="16" value="4" id="snap" class="slider" onchange="" style="opacity: 1; pointer-events: auto;">
		</div>
		<div class="setting-container">
			<p class="settings-label">???</p>
		</div>
		<div class="setting-container">
			<p class="settings-label">???</p>
		</div>
	</div>

</div>

