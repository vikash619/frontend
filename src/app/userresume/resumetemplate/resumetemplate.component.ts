import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-resumetemplate',
  templateUrl: './resumetemplate.component.html',
  styleUrls: ['./resumetemplate.component.css']
})
export class ResumetemplateComponent implements OnInit {

  constructor(private authservice:AuthService,
    private router:Router) { }

  backResumeData!: any;

  ngOnInit(): void {
    this.authservice.getResumeData().subscribe((data:any)=>{
      this.backResumeData = data.resumeData;
    })
  }

  download(){
    const resume: any = document.getElementById('outerContainer');
    // const resume: any = document.querySelector('#outerContainer');               uh can do like this as well

    html2canvas(resume, {allowTaint:true, useCORS: true}).then((canvas) =>{
      const img = canvas.toDataURL('imageURL');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(img, 'JPEG', 0, 0, width, height);
      pdf.save('Resume.pdf');

    })
  }
}
