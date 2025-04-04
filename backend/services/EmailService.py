from decouple import config
from email.mime.multipart import MIMEMultipart
from flask import Blueprint, jsonify
import smtplib
from email.mime.text import MIMEText
from jinja2 import Environment, FileSystemLoader, Template
import secrets
import string
from email import encoders
from email.mime.base import MIMEBase

class EmailService():

    @classmethod
    #* @description: Se construye el array que contiene toda la informacion del email a enviar
    def build_array_email(self, subject, path_html, destinatary, optional_array={}):
        try:
            # Crear el email
            email = MIMEMultipart()
            email['Subject'] = subject                # Asunto
            email["From"] = config('MAIL_USERNAME')   # Remitente
            email["To"] = ''.join(destinatary)      # Destinatarios (separados por coma)
            print("linea 43")
            # Configurar Jinja2 para cargar la plantilla desde el directorio
            env = Environment(loader=FileSystemLoader(config('TEMPLATE_EMAIL')))
            template = env.get_template(path_html)    # Cargar la plantilla HTML
            print("linea 47")
            print(optional_array)
            # Renderizar la plantilla con datos opcionales si los hay
            plantilla_html = template.render(optional_array)
            print(' linea 50')
            # Adjuntar el contenido HTML renderizado
            email.attach(MIMEText(plantilla_html, 'html'))
            print("linea 53")
            return email

        except Exception as ex:
            print("Error al enviar email")
            print(ex)
            return []
        
        
    #*@Description: Con este servicio podremos enviar emails
    #?@Params [subject:text, path_html:text, destinatary:array]
    #?Algunos datos se encuentran en el archivo .env
    #?Returns: 200 OK, 500 Failed
    @classmethod
    def send_email(self,subject,path_html,destinatary, optional_array = []):
        print(config('MAIL_USERNAME'))
        try:
            email_data = EmailService.build_array_email(subject,path_html,destinatary,optional_array)
            print(email_data)
            if(len(email_data) == 0):
                return 500
            
            #? Procedimiento de envio de email con SSL, para que no sea spam
            with smtplib.SMTP_SSL(config('DOMAIN_EXTENSION'), config('MAIL_PORT')) as server:  # ENVIAR DESDE UN DOMINIO PERSONALIZADO.
                server.login(config('MAIL_USERNAME'), config('MAIL_PASSWORD'))
                server.sendmail(config('MAIL_USERNAME'),destinatary, email_data.as_string())
            return 200;

        except Exception as ex:
            print("Error al enviar email")
            print(ex)
            return 500
        