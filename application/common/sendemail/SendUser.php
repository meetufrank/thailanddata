<?php
namespace app\common\sendemail;
use email\Cs;
use core\cases\logic\ChatUserLogic;
use think\Queue;
class SendUser
{
    
            /*
     * AM应用的layim用户提交case
     */
    public function addCaseSend($user=[]){
       //调用email接口方法
	    $emails = new Cs();
		
		//为1请求发送邮件
		$to = $user['email'];
	$url='http://'.$_SERVER['HTTP_HOST'];
        $user['url']=$url;
		//邮件主题
        
//	$YouxiangContent=ChatUserLogic::getInstance()->getLanguage($user,7); //获取邮件内容
         $content='A new patient，'.$user['field']['username'].'， has enrolled into ALLIANZ AYUDHYA/ ADVANCE MEDICAL Expert Second Medical Opinion (ESMO) service portal.';
	$email_data['to']=$to;
        $email_data['title']='Reminder of medical service';
        $email_data['content']=$content;
		
                //加入任务队列中
               Queue::push('app\common\jobs\QueueClient@sendMAIL', $email_data, $queue ='jobs');
                
    }

}



