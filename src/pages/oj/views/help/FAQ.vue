<template>
  <panel>
    <div slot="title">{{$t('m.Frequently_Asked_Questions')}}</div>
    <div class="content markdown-body">
      <ul>
        <li>입력과 출력이 어떻게 이루어지죠?
          <p>제출한 프로그램은 <code>stdin</code>('표준 입력')과 <code>stdout</code>('표준 출력')으로 처리됩니다.
            예를 들어, C언어의 <code>scanf</code> 나 C++의 <code>cin</code> 을 통해 채점서버의 입력을 받을 수 있고, <code>printf</code> 또는 <code>cout</code> 을 통해 채점서버에 출력값을 보낼 수 있습니다.
            또한 프로그램은 일반적인 파일을 읽고 쓸 수 없습니다. 그렇게 되면 <code>Runtime Error</code> 가 발생합니다
          </p>
        </li>
        <li>제출 응답시간이 무슨 뜻이죠??
        <p>코이업은 제출한 프로그램에 대해 여러번의 테스트케이스를 거쳐 채점합니다.
          각각의 테스트 케이스에 대해 시간제한 내로 채점이 되면, 제출 응답시간은 각각의 테스트케이스에 대해 가장 많은 시간을 소모한 응답시간이 설정됩니다.
          그렇지 않으면 시간초과로 오답처리가 됩니다.
        </p>
        </li>
        <li>C++의 Int64를 어떻게 사용할 수 있죠?
          <p> 선언할 때 <code>long long</code> 을 사용하고, <code>cin/cout</code> 또는 <code>%lld</code>으로 출력하면 됩니다, <code> __int64</code> 를 사용하면 <code>Compile Error</code> 처리됩니다.</p>
        </li>
        <li>문제 오류 / 버그가 있는데요?
          <p>카카오톡 아이디 jshan447 추가 후 문의해주시면 감사히 수정하겠습니다.</p>
        </li>
        <li>어떻게 만들었나요?
          <p>Qingdao Universisty에서 배포한 온라인저지 오픈소스를 사용했습니다. <a href="https://github.com/QingdaoU/OnlineJudge">(깃허브 링크)</a>.
            현재 아마존 AWS의 EC2 서비스를 활용해 운영 중에 있습니다.
          </p>
        </li>
      </ul>
    </div>
  </panel>
</template>

<script>
</script>

<style lang="less" scoped>
  .content {
    font-size: 16px;
    margin: 0 50px 40px 50px;
    > ul {
      list-style: disc;
      li {
        font-size: 16px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        p {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
