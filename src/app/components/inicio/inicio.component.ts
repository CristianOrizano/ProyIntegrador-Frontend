import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements  AfterViewInit {
  showWatsonChat = true;

  ngAfterViewInit() {
    if (this.showWatsonChat) {
    // Coloca tu código de script aquí
    (window as any).watsonAssistantChatOptions = {
      integrationID: "735b330d-d6ef-4606-826a-a98549702925", // The ID of this integration.
      region: "au-syd", // The region your integration is hosted in.
      serviceInstanceID: "99f16dc1-95c6-41ad-9c90-77783643eb94", // The ID of your service instance.
      onLoad: function(instance: { render: () => void; }) { instance.render(); }
    };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + ((window as any).watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }
 }
}
