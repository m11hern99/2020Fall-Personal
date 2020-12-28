// module 1                  
void f1();                   
void f2();                   
extern int gv;               
extern int sgv;              
int main()                   
{                            
   gv = 0;                   
   f2();                     
   sgv = 1; // link error    
   f1();    // link error    
   return 0;                 
}                          
