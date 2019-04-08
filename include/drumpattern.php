<div id="drumroll-container">
<div class="piano-roll-controls-container">
            <i class="fas fa-play piano-roll-controls-icon" onclick="play()"></i>
            <i class="fas fa-stop piano-roll-controls-icon" onclick="stop()"></i>
            <!-- <i class="fa fa-trash piano-roll-controls-icon" onclick="clearNotes()"></i> -->
        </div>

    <div id="drumroll-label-container">
        <div class="drumroll-label">Kick</div>
        <div class="drumroll-label">Snare</div>
        <div class="drumroll-label">HiHat Closed</div>
        <div class="drumroll-label">HiHat Open</div>
    </div>
    <div id="drumroll-canvas-container">
        <canvas id="drumroll-canvas"></canvas>
    </div>
</div>
<script type="text/javascript" src="<?php echo $doc_root?>scripts/drumpattern/drumpattern.js"></script>
<script type="text/javascript" src="<?php echo $doc_root?>scripts/drumpattern/drum-note-class.js"></script>