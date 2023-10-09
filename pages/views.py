from django.shortcuts import render, redirect
from .forms import ContactForm
from django.template.loader import render_to_string
from django.core.mail import send_mail 

def home(request):
    return render(request, 'pages/about_me.html')

def contact(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            print('The form is valid.')

            #Get the data from the HTML template
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            content = form.cleaned_data['content']
            


            html = render_to_string('pages/contact_template.html', {
                'name' : name,
                'email': email,
                'content': content
            })



            #Use the template to send the email
            #send_mail('The Subject', 'the Message', 'from@test.com', ['to@test.com'], html_message=template)
            send_mail(subject, 'this is the message', 'noreply@something', ['detroitking04@gmail.com'], html_message=html)

            return redirect('contact')
            #Go back to the contact page
            #do not forget to import the redirect shortcut

    #If we do not get a post request, just create an instance of the form
    else:
        form = ContactForm()

    #Render the form in the html template.
    return render(request, 'pages/contact.html', {
        'form': form
    })
