import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-form-afiliacion-dni',
  templateUrl: './form-afiliacion-dni.component.html',
  styleUrls: ['./form-afiliacion-dni.component.css']
})
export class FormAfiliacionDniComponent implements OnInit {

  public showWebcam = true;
  public allowCameraSwitch = false;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
  };

  public webcamImage: WebcamImage = null;

  private trigger: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length ===  1;
      });
  }

  public triggerSnapshot(): void {
      if (!this.webcamImage) {
        this.trigger.next();
        this.toggleWebcam();
      } else {
        this.webcamImage = null;
        this.toggleWebcam();
      }
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
